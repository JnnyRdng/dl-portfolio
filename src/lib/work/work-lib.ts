import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';

export interface IWork {
  title: string;
  subTitle: string;
  description: string;
  date: string;
  hero: string;
  videoId: string;
}

export interface IWorkData extends IWork {
  id: string;
  contentHtml?: string;
  prev?: string;
  next?: string;
}

const isIWork = (data: any): data is IWork => {
  return (
    typeof data === 'object' &&
    typeof data.title === 'string' &&
    typeof data.subTitle === 'string' &&
    typeof data.description === 'string' &&
    typeof data.date === 'string' &&
    typeof data.hero === 'string' &&
    typeof data.videoId === 'string'
  );
}

const workDir = path.join(process.cwd(), 'src', 'content', 'work');

export const getSortedWork = () => {
  const filenames = fs.readdirSync(workDir);
  const allWorkData = filenames.map((filename): IWorkData | undefined => {
    const id = filename.replace(/\.md$/, '');
    const fullPath = path.join(workDir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // parse the metadata
    const matterResult = matter(fileContents);
    const frontmatter = matterResult.data;
    if (isIWork(frontmatter)) {
      return { id, ...frontmatter }
    }
  }).filter((d): boolean => d !== undefined)
    .sort((a, b) => a!.date < b!.date ? 1 : -1);

  return allWorkData
    // .sort((a, b) => a!.date < b!.date ? 1 : -1)
    .map((d, i, arr): IWorkData => {
      const next = arr[i + 1]?.id ?? '';
      const prev = arr[i - 1]?.id ?? '';
      return {  next, prev, ...d, } as IWorkData;
    });
}

export const getAllWorkIds = () => {
  const filenames = fs.readdirSync(workDir);

  return filenames.map((filename, index) => ({
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