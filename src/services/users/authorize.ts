import Joi from 'joi';

import { prisma } from '@/lib/prisma/db';

import { hashPassword } from '@/utils/hashPassword';

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

type PayloadType = {
  email: string;
  password: string;
};

const authorize = async (payload: PayloadType) => {
  const { email, password } = await schema.validateAsync(payload);

  const user = await prisma.account.findUnique({
    where: {
      email,
    },
  });

  if (!user) return;

  const passwordHash = hashPassword(password, user.passwordSalt);

  if (passwordHash !== user.password) {
    return;
  }

  return user;
};

export { authorize };
