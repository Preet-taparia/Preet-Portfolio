export type TagObject = {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
};

export type UserProps = {
  name: string;
  username: string;
  twitter_username?: string;
  github_username?: string;
  user_id?: number;
  website_url?: string;
  profile_image: string;
  profile_image_90?: string;
};

export type BlogItemProps = {
  type_of?: string;
  id: number;
  title: string | { rendered: string };
  description?: string;
  published?: boolean;
  published_at?: string;
  slug: string;
  path?: string;
  url?: string;
  comments_count?: number;
  public_reactions_count?: number;
  page_views_count?: number;
  published_timestamp?: string;
  body_markdown?: string;
  positive_reactions_count?: number;
  cover_image?: string;
  tag_list?: string[];
  canonical_url?: string;
  reading_time_minutes?: number;
  user?: {
    name: string;
    username: string;
    twitter_username?: string;
    github_username?: string;
    website_url?: string;
    profile_image: string;
  };
  total_views_count?: number;
  excerpt?: {
    rendered: string;
    protected?: boolean;
  };
  tags_list?: TagObject[];
  featured_image_url?: string;
  date?: string;
};

export type BlogDetailProps = {
  id: number;
  date?: string;
  date_gmt?: string;
  modified?: string;
  modified_gmt?: string;
  slug: string;
  status?: string;
  type?: string;
  isExcerpt?: boolean;
  link?: string;
  title?: string | {
    rendered: string;
  };
  content?: {
    rendered?: string;
    markdown?: string;
    protected?: boolean;
  };
  excerpt?: {
    rendered: string;
    protected?: boolean;
  };
  author?: number;
  featured_media?: number;
  comment_status?: string;
  ping_status?: string;
  sticky?: boolean;
  template?: string;
  format?: string;
  meta?: {
    footnotes: string;
  };
  categories?: number[];
  tags?: number[] | string[];
  tags_list?: TagObject[];
  amp_enabled?: boolean;
  featured_image_url?: string;
  guid?: {
    rendered: string;
  };
  replies?: {
    embeddable: boolean;
    href: string;
  };
  version_history?: {
    count: number;
    href: string;
  };
  predecessor_version?: {
    id: number;
    href: string;
  };
  wp_featuredmedia?: {
    embeddable: boolean;
    href: string;
  };
  wp_attachment?: {
    href: string;
  };
  wp_term?: {
    taxonomy: string;
    embeddable: boolean;
    href: string;
  }[];
  curies?: {
    name: string;
    href: string;
    templated: boolean;
  }[];
  total_views_count?: number;
  description?: string;
  published_at?: string;
  cover_image?: string;
  reading_time_minutes?: number;
  tag_list?: string[];
  body_markdown?: string;
  body_html?: string;
};

export type BlogProps = {
  blogs: BlogItemProps[];
};

export type BlogFeaturedProps = {
  data: BlogItemProps[];
};

export type CommentItemProps = {
  type_of: string;
  id_code: string;
  created_at: string;
  body_html: string;
  user: UserProps;
  children: Comment[];
};