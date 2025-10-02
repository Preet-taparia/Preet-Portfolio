import fs from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), 'src', 'data');
const CONTENT_META_PATH = path.join(DB_DIR, 'contentmeta.json');
const PROJECTS_PATH = path.join(DB_DIR, 'projects.json');

interface ContentMeta {
  slug: string;
  views: number;
}

// This matches your JSON file structure
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  is_featured: boolean;
  link_demo?: string;    // Maps to demo_url in interface
  link_github?: string;  // Maps to github_url in interface  
  stacks: string;        // JSON string of tech stack array
  content?: string;
  is_show: boolean;
  created_at?: string;
  updated_at: string;
}

// Interface for the database operations
export interface DbProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  is_featured: boolean;
  demo_url?: string;
  github_url?: string;
  tech_stack: string[] | string;
  content?: string;
  is_show: boolean;
  created_at?: string;
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
  }): Promise<DbProject[]> => {
    try {
      let rawData = JSON.parse(fs.readFileSync(PROJECTS_PATH, 'utf8')) as Project[];
      
      // Transform the data to match DbProject interface
      let data: DbProject[] = rawData.map(project => ({
        id: project.id,
        title: project.title,
        slug: project.slug,
        description: project.description,
        image: project.image,
        is_featured: project.is_featured,
        demo_url: project.link_demo,
        github_url: project.link_github,
        tech_stack: project.stacks ? JSON.parse(project.stacks) : [],
        content: project.content,
        is_show: project.is_show ?? true, // Default to true if undefined
        created_at: project.created_at,
        updated_at: project.updated_at,
      }));

      if (params?.orderBy) {
        for (const orderItem of params.orderBy) {
          const [field, direction] = Object.entries(orderItem)[0];
          data = data.sort((a, b) => {
            const valueA = a[field as keyof DbProject];
            const valueB = b[field as keyof DbProject];

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
    } catch (error) {
      console.error('Error reading projects:', error);
      return [];
    }
  },

  findUnique: async (params: { where: { slug: string } }): Promise<DbProject | null> => {
    try {
      const rawData = JSON.parse(fs.readFileSync(PROJECTS_PATH, 'utf8')) as Project[];
      const project = rawData.find(project => project.slug === params.where.slug);
      
      if (!project) return null;

      return {
        id: project.id,
        title: project.title,
        slug: project.slug,
        description: project.description,
        image: project.image,
        is_featured: project.is_featured,
        demo_url: project.link_demo,
        github_url: project.link_github,
        tech_stack: project.stacks ? JSON.parse(project.stacks) : [],
        content: project.content,
        is_show: project.is_show,
        created_at: project.created_at,
        updated_at: project.updated_at,
      };
    } catch (error) {
      console.error('Error reading project:', error);
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