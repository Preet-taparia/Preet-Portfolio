// import type { NextApiRequest, NextApiResponse } from 'next';

// import prisma from '@/common/libs/prisma';
// import { BlogItemProps } from '@/common/types/blog';
// import { getBlogData } from '@/services/devto';


// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ): Promise<void> {
//   try {
//     res.setHeader(
//       'Cache-Control',
//       'public, s-maxage=60, stale-while-revalidate=30',
//     );

//     const { page, per_page } = req.query;

//     const responseData = await getBlogData({
//       page: Number(page) || 1,
//       per_page: Number(per_page) || 9,
//     });

//     const blogItemsWithViews = await Promise.all(
//       responseData?.data?.posts?.map(async (blogItem: BlogItemProps) => {
//         const { slug } = blogItem;

//         const contentMeta = await prisma.contentmeta.findUnique({
//           where: { slug: slug as string },
//           select: { views: true },
//         });

//         const viewsCount = contentMeta?.views ?? 0;

//         return {
//           ...blogItem,
//           total_views_count: viewsCount,
//         };
//       }),
//     );

//     const responses = {
//       status: true,
//       data: {
//         total_pages: responseData?.data?.total_pages,
//         total_posts: responseData?.data?.total_posts,
//         page: responseData?.data?.page,
//         per_page: responseData?.data?.per_page,
//         posts: blogItemsWithViews,
//       },
//     };

//     res.status(200).json(responses);
//   } catch (error) {
//     res.status(200).json({ status: false, error });
//   }
// }


// import type { NextApiRequest, NextApiResponse } from 'next';

// import jsonDb from '@/common/libs/jsonDb';
// import { BlogItemProps } from '@/common/types/blog';
// import { getBlogData } from '@/services/devto';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ): Promise<void> {
//   try {
//     res.setHeader(
//       'Cache-Control',
//       'public, s-maxage=60, stale-while-revalidate=30',
//     );

//     const { page, per_page } = req.query;

//     const responseData = await getBlogData({
//       page: Number(page) || 1,
//       per_page: Number(per_page) || 9,
//     });

//     // Debug log to see what's coming from Dev.to
//     console.log('Dev.to API Response:', responseData);

//     if (!responseData?.data?.posts || !Array.isArray(responseData.data.posts)) {
//       console.error('Invalid posts data structure:', responseData?.data);
//       return res.status(200).json({ 
//         status: false, 
//         error: 'Invalid response from Dev.to API' 
//       });
//     }

//     const blogItemsWithViews = await Promise.all(
//       responseData.data.posts.map(async (blogItem: BlogItemProps) => {
//         const { slug } = blogItem;

//         const contentMeta = await jsonDb.contentmeta.findUnique({
//           where: { slug: slug as string },
//         });

//         const viewsCount = contentMeta?.views ?? 0;

//         return {
//           ...blogItem,
//           total_views_count: viewsCount,
//         };
//       }),
//     );

//     const responses = {
//       status: true,
//       data: {
//         total_pages: responseData?.data?.total_pages,
//         total_posts: responseData?.data?.total_posts,
//         page: responseData?.data?.page,
//         per_page: responseData?.data?.per_page,
//         posts: blogItemsWithViews,
//       },
//     };

//     res.status(200).json(responses);
//   } catch (error) {
//     console.error('Blog API error:', error);
//     res.status(200).json({ status: false, error });
//   }
// }


import type { NextApiRequest, NextApiResponse } from 'next';

import jsonDb from '@/common/libs/jsonDb';
import { BlogItemProps } from '@/common/types/blog';
import { getBlogData } from '@/services/devto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30',
    );

    const { page, per_page } = req.query;

    const responseData = await getBlogData({
      page: Number(page) || 1,
      per_page: Number(per_page) || 9,
    });

    // Debug log to see what's coming from Dev.to
    console.log('Dev.to API Response:', responseData);

    if (!responseData?.data?.posts || !Array.isArray(responseData.data.posts)) {
      console.error('Invalid posts data structure:', responseData?.data);
      return res.status(200).json({ 
        status: false, 
        error: 'Invalid response from Dev.to API' 
      });
    }

    const blogItemsWithViews = await Promise.all(
      responseData.data.posts.map(async (blogItem: BlogItemProps) => {
        const { slug } = blogItem;

        // Get views from our local database
        const contentMeta = await jsonDb.contentmeta.findUnique({
          where: { slug: slug as string },
        });

        const viewsCount = contentMeta?.views ?? 0;

        // Transform Dev.to post to be compatible with our components
        return {
          ...blogItem,
          total_views_count: viewsCount,
          // Add WordPress-compatible fields
          title: {
            rendered: blogItem.title
          },
          excerpt: {
            rendered: blogItem.description || ''
          },
          // Transform tags if needed
          tags_list: Array.isArray(blogItem.tag_list) 
            ? blogItem.tag_list.map((tag: string, index: number) => ({
                term_id: index,
                name: tag,
                slug: tag.toLowerCase().replace(/\s+/g, '-'),
                term_group: 0,
                term_taxonomy_id: index,
                taxonomy: 'post_tag',
                description: '',
                parent: 0,
                count: 1,
                filter: 'raw'
              }))
            : [],
          featured_image_url: blogItem.cover_image
        };
      }),
    );

    const responses = {
      status: true,
      data: {
        total_pages: responseData?.data?.total_pages,
        total_posts: responseData?.data?.total_posts,
        page: responseData?.data?.page,
        per_page: responseData?.data?.per_page,
        posts: blogItemsWithViews,
      },
    };

    res.status(200).json(responses);
  } catch (error) {
    console.error('Blog API error:', error);
    res.status(200).json({ status: false, error });
  }
}