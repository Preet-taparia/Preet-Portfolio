import { NextApiRequest, NextApiResponse } from 'next';

import jsonDb from '@/common/libs/jsonDb';

interface ResponseData {
  views: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug } = req.query;

  if (req.method === 'GET') {
    try {
      const contentMeta = await jsonDb.contentmeta.findUnique({
        where: { slug: slug as string },
      });

      const contentViewsCount = contentMeta?.views ?? 0;

      const response: ResponseData = {
        views: contentViewsCount,
      };

      return res.json(response);
    } catch (error) {
      console.error('Error fetching views:', error);
      return res.status(500).json({ error: 'Failed to fetch content meta' });
    }
  } else if (req.method === 'POST') {
    try {
      const contentMeta = await jsonDb.contentmeta.update({
        where: { slug: slug as string },
        data: {
          views: {
            increment: 1,
          },
        },
        select: { views: true },
      });
      return res.json(contentMeta);
    } catch (error) {
      console.error('Error updating views:', error);
      return res.status(500).json({ error: 'Failed to update views count' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}