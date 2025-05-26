import fs from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), 'data');
const CONTENT_META_PATH = path.join(DB_DIR, 'contentmeta.json');
const PROJECTS_PATH = path.join(DB_DIR, 'projects.json');

interface ContentMeta {
  slug: string;
  views: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  is_featured: boolean;
  demo_url?: string;
  github_url?: string;
  tech_stack: string[];
  content?: string;
  created_at: string;
  updated_at: string;
}

const ensureDbFilesExist = () => {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  if (!fs.existsSync(CONTENT_META_PATH)) {
    fs.writeFileSync(CONTENT_META_PATH, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(PROJECTS_PATH)) {
    fs.writeFileSync(PROJECTS_PATH, JSON.stringify([], null, 2));
  }
};

ensureDbFilesExist();

export const contentMetaDb = {
  findUnique: async (params: { where: { slug: string } }) => {
    try {
      const data = JSON.parse(fs.readFileSync(CONTENT_META_PATH, 'utf8')) as ContentMeta[];
      return data.find(item => item.slug === params.where.slug) || null;
    } catch {
      return null;
    }
  },

  update: async (params: {
    where: { slug: string },
    data: { views: { increment: number } },
    select?: { views: boolean }
  }) => {
    const data = JSON.parse(fs.readFileSync(CONTENT_META_PATH, 'utf8')) as ContentMeta[];
    let item = data.find(item => item.slug === params.where.slug);

    if (!item) {
      item = { slug: params.where.slug, views: 0 };
      data.push(item);
    }

    if (params.data.views?.increment) {
      item.views += params.data.views.increment;
    }

    fs.writeFileSync(CONTENT_META_PATH, JSON.stringify(data, null, 2));

    if (params.select?.views) {
      return { views: item.views };
    }
    return item;
  }
};

export const projectsDb = {
  findMany: async (params?: {
    orderBy?: Array<{ [key: string]: 'asc' | 'desc' }>
  }) => {
    try {
      let data = JSON.parse(fs.readFileSync(PROJECTS_PATH, 'utf8')) as Project[];

      if (params?.orderBy) {
        for (const orderItem of params.orderBy) {
          const [field, direction] = Object.entries(orderItem)[0];
          data = data.sort((a, b) => {
            const valueA = a[field as keyof Project];
            const valueB = b[field as keyof Project];

            if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
              return direction === 'desc'
                ? (valueA === valueB ? 0 : valueA ? -1 : 1)
                : (valueA === valueB ? 0 : valueA ? 1 : -1);
            }

            if (typeof valueA === 'string' && typeof valueB === 'string') {
              return direction === 'desc'
                ? valueB.localeCompare(valueA)
                : valueA.localeCompare(valueB);
            }

            return 0;
          });
        }
      }

      return data;
    } catch {
      return [];
    }
  },

  findUnique: async (params: { where: { slug: string } }) => {
    try {
      const data = JSON.parse(fs.readFileSync(PROJECTS_PATH, 'utf8')) as Project[];
      return data.find(project => project.slug === params.where.slug) || null;
    } catch {
      return null;
    }
  }
};

const jsonDb = {
  contentmeta: contentMetaDb,
  projects: projectsDb,
};

let dbInstance: typeof jsonDb;

if (process.env.NODE_ENV === 'production') {
  dbInstance = jsonDb;
} else {
  const globalWithDb = global as typeof globalThis & {
    jsonDb: typeof jsonDb;
  };
  if (!globalWithDb.jsonDb) {
    globalWithDb.jsonDb = jsonDb;
  }
  dbInstance = globalWithDb.jsonDb;
}

export default dbInstance;