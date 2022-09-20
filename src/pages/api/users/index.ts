import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

import { AccountType, create } from '@/services/users/create';

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
        let message;
        if (error instanceof z.ZodError) {
          message = `${error.issues[0].path[0]}: ${error.issues[0].message}`;
        } else if (error instanceof Error) {
          message = error.message;
        }
        res.status(422).json({ status: 'not_created', error: message });
      }

      break;
    }
    default:
      res.status(400);
  }
};

export default handler;
