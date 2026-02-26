import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: Props) {
  return (
    <h1
      className={clsx(
        "font-heading text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: Props) {
  return (
    <h2
      className={clsx(
        "font-heading text-3xl md:text-4xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: Props) {
  return (
    <h3
      className={clsx(
        "font-heading text-2xl font-semibold",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function Text({ children, className }: Props) {
  return (
    <p
      className={clsx(
        "font-body text-base text-neutral-600 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

export function TextLarge({ children, className }: Props) {
  return (
    <p
      className={clsx(
        "font-body text-lg text-neutral-700 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}