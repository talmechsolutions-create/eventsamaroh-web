import Link from "next/link";
import clsx from "clsx";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline";
  target?: string;
  className?: string;
}

export default function BrandButton({
  href,
  children,
  variant = "primary",
  target,
  className,
}: Props) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/40";

  const variants = {
    primary:
      "bg-brand-primary text-white hover:bg-black hover:shadow-lg",

    accent:
      "bg-brand-accent text-white hover:brightness-110 hover:shadow-lg",

    outline:
      "border border-brand-accent text-brand-primary hover:bg-brand-accent hover:text-white",
  };

  return (
    <Link
      href={href}
      target={target}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </Link>
  );
}