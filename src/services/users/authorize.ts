import { z } from 'zod';

import { prisma } from '@/lib/prisma/db';

import { hashPassword } from '@/utils/hashPassword';

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type PayloadType = z.infer<typeof schema>;

const authorize = async (payload: PayloadType) => {
  const { email, password } = schema.parse(payload);

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
