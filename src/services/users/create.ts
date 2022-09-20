import Prisma from '@prisma/client';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

import { prisma } from '@/lib/prisma/db';

import { hashPassword } from '@/utils/hashPassword';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(4),
  password: z.string().min(8),
  type: z.enum(['Person', 'Company']),
  phoneNumber: z
    .string()
    .length(10)
    .regex(/^[0-9]+$/),
});

export type UserType = z.infer<typeof schema>;

const create = async (payload: UserType) => {
  const { email, name, type, password, phoneNumber } = schema.parse(payload);

  const isExistingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isExistingUser) throw new Error('User already exists');

  const passwordSalt = bcrypt.genSaltSync(10);
  const passwordHash = hashPassword(password, passwordSalt);

  const { id } = await prisma.user.create({
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
          userId: id,
        },
      });
      break;
    case Prisma.Type.Company:
      await prisma.company.create({
        data: {
          name,
          userId: id,
        },
      });
      break;
    default:
      throw new Error('Invalid user type');
  }

  return email;
};

export { create };
