/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { BlogDetailProps, BlogItemProps, TagObject } from '@/common/types/blog';

const BASE_URL = 'https://dev.to/api/';
const BLOG_URL = `${BASE_URL}articles/`;
const COMMENT_URL = `${BASE_URL}comments`;
const USERNAME = 'preettaparia';

const DEVTO_KEY = process.env.DEVTO_KEY as string;

type BlogParamsProps = {
  page?: number;
  per_page?: number;
};

// Transform Dev.to article to WordPress-compatible format
const transformDevToArticle = (article: any): BlogDetailProps => {
  const tags = Array.isArray(article.tag_list) 
    ? article.tag_list.map((tag: string, index: number): TagObject => ({
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
    : [];

  return {
    id: article.id,
    slug: article.slug,
    date: article.published_at,
    date_gmt: article.published_at,
    modified: article.edited_at || article.published_at,
    modified_gmt: article.edited_at || article.published_at,
    status: article.published ? 'publish' : 'draft',
    type: 'post',
    link: article.url || article.canonical_url || '',
    title: {
      rendered: article.title
    },
    // Handle content for both formats
    content: {
      rendered: article.body_html || '',
      markdown: article.body_markdown || '',
      protected: false
    },
    excerpt: {
      rendered: article.description || '',
      protected: false
    },
    author: article.user?.id || 0,
    featured_media: 0,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      footnotes: ''
    },
    categories: [],
    tags: article.tags || [],
    // Transform tag_list to tags_list format compatible with WordPress
    tags_list: tags,
    amp_enabled: false,
    featured_image_url: article.cover_image || '',
    guid: {
      rendered: article.canonical_url || article.url || ''
    },
    replies: {
      embeddable: true,
      href: ''
    },
    version_history: {
      count: 1,
      href: ''
    },
    predecessor_version: {
      id: 0,
      href: ''
    },
    wp_featuredmedia: {
      embeddable: true,
      href: ''
    },
    wp_attachment: {
      href: ''
    },
    wp_term: [],
    curies: [],
    total_views_count: article.page_views_count || 0,
    // Dev.to specific fields - keep them for compatibility
    description: article.description || '',
    published_at: article.published_at,
    cover_image: article.cover_image,
    reading_time_minutes: article.reading_time_minutes,
    body_markdown: article.body_markdown,
    tag_list: article.tag_list
  };
};

export const getBlogData = async ({
  page = 1,
  per_page = 6,
}: BlogParamsProps): Promise<{ status: number; data: any }> => {
  const params = new URLSearchParams({
    username: USERNAME,
    page: page.toString(),
    per_page: per_page.toString(),
  });

  const response = await axios.get(`${BLOG_URL}me?${params.toString()}`, {
    headers: {
      'api-key': DEVTO_KEY,
    },
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const posts = response.data;

  const data = {
    posts: posts,
    page: page,
    per_page: per_page,
    total_pages: Math.ceil(posts.length / per_page),
    total_posts: posts.length,
    has_next: posts.length === per_page,
  };

  return {
    status,
    data,
  };
};

export const getBlogDetail = async ({
  id,
}: {
  id: number;
}): Promise<{ status: number; data: BlogDetailProps }> => {
  const params = new URLSearchParams({ username: USERNAME });

  const response = await axios.get(`${BLOG_URL}/${id}?${params.toString()}`, {
    headers: {
      'api-key': DEVTO_KEY,
    },
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} as BlogDetailProps };
  }

  // Transform the Dev.to article to WordPress-compatible format
  const transformedData = transformDevToArticle(response.data);

  return {
    status,
    data: transformedData,
  };
};

export const getBlogComment = async ({
  post_id,
}: {
  post_id: string;
}): Promise<{ status: number; data: any }> => {
  const response = await axios.get(`${COMMENT_URL}/?a_id=${post_id}`, {
    headers: {
      'api-key': DEVTO_KEY,
    },
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const data = response.data;

  return {
    status,
    data,
  };
};

export const getBlogViews = async ({
  id,
}: {
  id: number;
}): Promise<{ status: number; data: any }> => {
  const response = await axios.get(`${BLOG_URL}me/all`, {
    headers: {
      'api-key': DEVTO_KEY,
    },
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const data = response.data;

  const findArticle = data?.find((blog: BlogItemProps) => blog.id === id);
  const page_views_count = findArticle?.page_views_count;

  return {
    status,
    data: {
      page_views_count,
    },
  };
};