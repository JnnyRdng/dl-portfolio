import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';

const aboutPath = path.join(process.cwd(), 'src', 'content', 'about.md');

export const getAbout = async () => {
  const fileContents = fs.readFileSync(aboutPath, 'utf8');
  const matterResult = matter(fileContents);
  const contentHtml = matterResult.content;

  return { id: 'about', contentHtml }
}