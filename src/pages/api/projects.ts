import type { NextApiRequest, NextApiResponse } from 'next';

import jsonDb from '@/common/libs/jsonDb';

type Data = {
  status: boolean;
  data?: any;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const response = await jsonDb.projects.findMany();
    res.status(200).json({ status: true, data: response });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(200).json({ status: false, error: error });
  }
}