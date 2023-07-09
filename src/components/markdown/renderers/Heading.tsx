import { clamp } from "@/lib/utils/number-utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  children: React.ReactNode;
  level: HeadingLevel;
}

export const Heading = ({ children, level }: HeadingProps) => {

  const adjustedLevel = clamp(level + 1, 6) as HeadingLevel;
  const Heading: keyof React.JSX.IntrinsicElements = `h${adjustedLevel}`;

  return (
    <div className='full-width-container'>
    <Heading>
      {children}
    </Heading>
    </div>
  );
}
