import Prisma from '@prisma/client';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

import { prisma } from '@/lib/prisma/db';

import { hashPassword } from '@/utils/hashPassword';

type AccountType = Readonly<Omit<Prisma.Account, 'id' | 'salt'>> & {
  name: string;
};

const schema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
  type: z.enum(['Person', 'Company']),
  phoneNumber: z
    .string()
    .length(10)
    .regex(/^[0-9]+$/),
});

const create = async (payload: AccountType) => {
  const { email, name, type, password, phoneNumber } = schema.parse(payload);

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
