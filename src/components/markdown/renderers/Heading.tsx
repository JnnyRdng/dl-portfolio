import { FullWidth } from "@/components/typography/FullWidth";
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
    <FullWidth textAlign="left">
      <Heading>
        {children}
      </Heading>
    </FullWidth>
  );
}
