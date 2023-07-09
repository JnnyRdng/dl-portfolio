import Link from "next/link";
import React from "react";
import { Icon } from 'react-feather';

interface Props {
  href: string;
  text: string | null;
  icon: Icon;
  position?: 'left' | 'right';
}

export const IconLink = ({ href, text, icon: Icon, position = 'right' }: Props) => {

  return (
    <>
      <Link
        href={href}
      >
        {position === 'right' && `${text ?? ''} `}
        <Icon size={16} />
        {position === 'left' && ` ${text ?? ''}`}
      </Link>
    </>
  );
}
