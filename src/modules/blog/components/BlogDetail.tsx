import useSWR from 'swr';

import Breakline from '@/common/components/elements/Breakline';
import MDXComponent from '@/common/components/elements/MDXComponent';
import { calculateReadingTime } from '@/common/helpers';
import { BlogDetailProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

import BlogHeader from './BlogHeader';

const BlogDetail = ({
  id,
  title,
  date,
  slug,
  content,
  published_at,
  cover_image,
  reading_time_minutes,
  body_markdown,
  tag_list,
}: BlogDetailProps) => {
  const { data: viewsData } = useSWR(
    `/api/views?slug=${slug}&id=${id}`,
    fetcher,
  );

  const viewsCount = viewsData?.views || 0;
  const devTags = Array.isArray(tag_list) ? tag_list : [];
  const hasDevTags = devTags.length > 0;

  const readingTime = reading_time_minutes ||
    (content?.rendered ? calculateReadingTime(content.rendered) : 0);
  const publishedDate = date || published_at || '';

  const titleText = typeof title === 'object' ? title?.rendered : title;

  return (
    <>
      <BlogHeader
        title={titleText || ''}
        comments_count={0}
        reading_time_minutes={readingTime || 0}
        published_at={publishedDate}
        page_views_count={viewsCount}
      />

      {(hasDevTags) && (
        <div className='my-6 space-y-2'>
          <h6 className='text-lg font-medium'>Tags:</h6>
          <div className='flex flex-wrap gap-2 pt-2'>
            {hasDevTags && devTags.map((tag, idx) => (
              <div
                key={`devto-tag-${idx}`}
                className='rounded-full bg-neutral-200 px-4 py-1 text-[14px] font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200'
              >
                <span className='mr-1 font-semibold'>#</span>
                {typeof tag === 'string'
                  ? tag.charAt(0).toUpperCase() + tag.slice(1)
                  : tag}
              </div>
            ))}
          </div>
        </div>
      )}
      {!hasDevTags && (
        <p className='text-sm text-neutral-500 dark:text-neutral-400'>No tags available</p>
      )}

      {cover_image && (
        <div className='my-6'>
          <img
            src={cover_image}
            alt={titleText || 'Blog cover image'}
            className='w-full rounded-lg object-cover'
          />
        </div>
      )}

      <Breakline className='!my-10' />

      <div className='space-y-6 leading-[1.8] dark:text-neutral-300'>
        {content?.markdown ? (
          <MDXComponent>{content.markdown}</MDXComponent>
        ) : body_markdown ? (
          <MDXComponent>{body_markdown}</MDXComponent>
        ) : content?.rendered ? (
          <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
        ) : null}
      </div>

      <Breakline className='!my-10' />

    </>
  );
};

export default BlogDetail;
