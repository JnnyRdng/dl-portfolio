import { Indented } from "@/components/typography/Indented";
import React, { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
}

export const Crew = ({ children }: Props) => {
  const [child] = children as any;
  return (
    <div style={{ margin: '1rem 0' }}>
      <Indented colour='blue'>
        <h3>Crew</h3>
        <div style={{ marginBottom: '1.5rem' }}>
          {React.Children.toArray(child.props.children)
            .filter((child: any) => child.type !== 'br' && child !== '\n')
            .map((c) => {
              return (c as string).split('\n').map((e, i) => {
                const [title, text] = (e as string).split(/:\s*/);
                const style: CSSProperties = {
                  ...(!text ? { gridColumn: '1 / -1' } : {})
                }
                return (
                  <div key={e} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', marginBottom: '.5rem' }}>
                    <em style={style}>{title}{text && (<>:&nbsp;</>)}</em>
                    <strong>{text}</strong>
                  </div>
                );
              })
            })}
        </div>
      </Indented>
    </div>
  );
}
