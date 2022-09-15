import Prisma from '@prisma/client';
import bcrypt from 'bcryptjs';
import Joi from 'joi';

import { prisma } from '@/lib/prisma/db';

import { hashPassword } from '@/utils/hashPassword';

type AccountType = Readonly<Omit<Prisma.Account, 'id' | 'salt'>> & {
  name: string;
};

const schema = Joi.object<AccountType>({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  type: Joi.string().valid(...Object.values(Prisma.Type)),
  phoneNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

const create = async (payload: AccountType) => {
  const { email, name, type, password, phoneNumber } =
    await schema.validateAsync(payload);

  const isExistingUser = await prisma.account.findUnique({
    where: {
      email,
    },
  });

  if (isExistingUser) throw new Error('User already exists');

  const passwordSalt = bcrypt.genSaltSync(10);
  const passwordHash = hashPassword(password, passwordSalt);

  const { id } = await prisma.account.create({
    data: {
      email,
      type,
      phoneNumber,
      password: passwordHash,
      passwordSalt,
    },
  });

  switch (type) {
    case Prisma.Type.Person:
      await prisma.person.create({
        data: {
          fullName: name,
          accountId: id,
        },
      });
      break;
    case Prisma.Type.Company:
      await prisma.company.create({
        data: {
          name,
          accountId: id,
        },
      });
      break;
    default:
      throw new Error('Invalid account type');
  }

  return email;
};

export { create };
