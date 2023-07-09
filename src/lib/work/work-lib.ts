import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';


export interface Sibling {
  id: string | null;
  text: string | null;
}
export interface IWork {
  title: string;
  subTitle?: string;
  description?: string;
  date: string;
  hero: string;
  videoId?: string;
}

export interface IWorkData extends IWork {
  id: string;
  contentHtml?: string;
  prev?: Sibling;
  next?: Sibling;
}

const isIWork = (data: any): data is IWork => {
  return (
    typeof data === 'object' &&
    typeof data.title === 'string' &&
    (typeof data.subTitle === 'undefined' || typeof data.subTitle === 'string') &&
    (typeof data.description === 'undefined' || typeof data.description === 'string') &&
    typeof data.date === 'string' &&
    typeof data.hero === 'string' &&
    (typeof data.videoId === 'undefined' || typeof data.videoId === 'string')
  );
}

const workDir = path.join(process.cwd(), 'src', 'content', 'work');

export const getSortedWork = () => {
  const filenames = fs.readdirSync(workDir);
  const allWorkData = filenames.map((filename): IWorkData => {
    const id = filename.replace(/\.md$/, '');
    const fullPath = path.join(workDir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // parse the metadata
    const matterResult = matter(fileContents);
    const frontmatter = matterResult.data;
    if (isIWork(frontmatter)) {
      return { id, ...frontmatter }
    } else {
      throw Error('Invalid markdown')
    }
  }).filter(Boolean)
    .sort((a, b) => a!.date < b!.date ? 1 : -1);

  return allWorkData;
}

export const getAllWorkIds = () => {
  const filenames = fs.readdirSync(workDir);

  return filenames.map((filename) => ({
    params: { id: filename.replace(/\.md$/, '') }
  }));
}

export const getWorkData = async (id: string) => {
  const fullPath = path.join(workDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // parse contents
  const matterResult = matter(fileContents);
  const contentHtml = matterResult.content;

  return { id, contentHtml, ...matterResult.data } as IWorkData;
}

export const getSiblings = async (id: string) => {
  const allWork = getSortedWork();
  const index = allWork.findIndex(w => w?.id === id);
  return {
    prev: {
      id: allWork[index - 1]?.id ?? null,
      text: allWork[index - 1]?.title ?? null,
    },
    next: {
      id: allWork[index + 1]?.id ?? null,
      text: allWork[index + 1]?.title ?? null,
    }
  }
}