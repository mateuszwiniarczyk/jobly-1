import Prisma, { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import Joi from 'joi';

type UserType = Readonly<Omit<Prisma.User, 'id' | 'salt'>>;

const schema = Joi.object<UserType>({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  type: Joi.string().valid(...Object.values(Prisma.Type)),
});

const create = async (payload: UserType) => {
  const prisma = new PrismaClient();

  const { email, name, type, password } = await schema.validateAsync(payload);

  const isExistingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isExistingUser) throw new Error('User already exists');

  const passwordSalt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, passwordSalt);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      type,
      password: passwordHash,
      salt: passwordSalt,
    },
  });

  return user;
};

export { create };
