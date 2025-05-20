// import axios from 'axios';
// import { GetServerSideProps, NextPage } from 'next';
// import dynamic from 'next/dynamic';
// import { NextSeo } from 'next-seo';
// import { useEffect } from 'react';

// import BackButton from '@/common/components/elements/BackButton';
// import Container from '@/common/components/elements/Container';
// import { formatExcerpt } from '@/common/helpers';
// import { BlogDetailProps } from '@/common/types/blog';
// import BlogDetail from '@/modules/blog/components/BlogDetail';
// import { getBlogDetail } from '@/services/devto';

// const GiscusComment = dynamic(
//   () => import('@/modules/blog/components/GiscusComment'),
// );

// interface BlogDetailPageProps {
//   blog: {
//     data: BlogDetailProps;
//   };
// }

// const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
//   const blogData = blog?.data || {};

//   const slug = `blog/${blogData?.slug}?id=${blogData?.id}`;
//   const canonicalUrl = `https://preet-portfolio.vercel.app/${slug}`;
//   const description = formatExcerpt(blogData?.excerpt?.rendered);

//   const incrementViews = async () => {
//     await axios.post(`/api/views?&slug=${blogData?.slug}`);
//   };

//   useEffect(() => {
//     if (process.env.NODE_ENV === 'production') {
//       incrementViews();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <>
//       <NextSeo
//         title={`${blogData?.title?.rendered} - Blog - Preet Taparia`}
//         description={description}
//         canonical={canonicalUrl}
//         openGraph={{
//           type: 'article',
//           article: {
//             publishedTime: blogData?.date,
//             modifiedTime: blogData?.date,
//             authors: ['Preet Taparia'],
//           },
//           url: canonicalUrl,
//           images: [
//             {
//               url: blogData?.featured_image_url,
//             },
//           ],
//           siteName: 'preet-taparia blog',
//         }}
//       />
//       <Container data-aos='fade-up'>
//         <BackButton url='/blog' />
//         <BlogDetail {...blogData} />
//         <section id='comments'>
//           <GiscusComment isEnableReaction={false} />
//         </section>
//       </Container>
//     </>
//   );
// };

// export default BlogDetailPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const blogId = context.query?.id as string;

//   if (!blogId) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   const response = await getBlogDetail({ id: parseInt(blogId) });

//   if (response?.status === 404) {
//     return {
//       redirect: {
//         destination: '/404',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       blog: response,
//     },
//   };
// };

import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import { formatExcerpt } from '@/common/helpers';
import { BlogDetailProps } from '@/common/types/blog';
import BlogDetail from '@/modules/blog/components/BlogDetail';
import { getBlogDetail } from '@/services/devto';

const GiscusComment = dynamic(
  () => import('@/modules/blog/components/GiscusComment'),
);

interface BlogDetailPageProps {
  blog: {
    data: BlogDetailProps;
  };
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
  const blogData = blog?.data || {};

  const slug = `blog/${blogData?.slug}?id=${blogData?.id}`;
  const canonicalUrl = `https://preet-portfolio.vercel.app/${slug}`;
  
  // Handle description from either WordPress or Dev.to format
  const description = blogData?.description || 
    formatExcerpt(blogData?.excerpt?.rendered || '');
  
  // Get title from either format
  const title = typeof blogData?.title === 'object' 
    ? blogData?.title?.rendered 
    : blogData?.title || '';

  const incrementViews = async () => {
    await axios.post(`/api/views?&slug=${blogData?.slug}`);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      incrementViews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get featured image from either format with fallback
  const featuredImage = blogData?.featured_image_url || 
    blogData?.cover_image || 
    'https://preet-portfolio.vercel.app/images/default-blog-image.jpg'; // Add a default image URL

  return (
    <>
      <NextSeo
        title={`${title} - Blog - Preet Taparia`}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blogData?.date || blogData?.published_at || '',
            modifiedTime: blogData?.modified || blogData?.published_at || '',
            authors: ['Preet Taparia'],
          },
          url: canonicalUrl,
          images: [
            {
              url: featuredImage,
            },
          ],
          siteName: 'preet-taparia blog',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/blog' />
        <BlogDetail {...blogData} />
        <section id='comments'>
          <GiscusComment isEnableReaction={false} />
        </section>
      </Container>
    </>
  );
};

export default BlogDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const blogId = context.query?.id as string;

  if (!blogId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const response = await getBlogDetail({ id: parseInt(blogId) });

  if (response?.status === 404) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog: response,
    },
  };
};