import Prisma from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { create } from '@/services/users/create';

type AccountType = Readonly<Omit<Prisma.Account, 'id' | 'salt'>> & {
  name: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  body: AccountType;
}

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      try {
        const payload = req.body;
        const email = await create(payload);

        res.status(200).json({ status: 'created', email });
      } catch (error) {
        if (error instanceof Error) {
          res.status(422).json({ status: 'not_created', error: error.message });
        }
      }

      break;
    }
    default:
      res.status(400);
  }
};

export default handler;
