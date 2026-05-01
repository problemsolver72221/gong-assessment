import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
};

export const Section = ({
  id,
  className = "",
  labelledBy,
  children,
}: SectionProps) => {
  return (
    <section id={id} className={className} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
};
