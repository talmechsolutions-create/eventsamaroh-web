import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  desc,
  href,
  icon: Icon,
}: Props) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200 rounded-2xl p-8
                 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-xl
                 hover:border-brand-gold"
    >
      <div className="flex items-center gap-4">
        <div
          className="h-12 w-12 rounded-xl flex items-center justify-center
                     bg-gray-100 text-brand-black
                     transition group-hover:bg-brand-black group-hover:text-white"
        >
          <Icon size={22} />
        </div>

        <h3 className="text-lg font-semibold text-brand-black">
          {title}
        </h3>
      </div>

      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>

      <span className="inline-block mt-5 text-sm font-medium text-brand-black">
        Learn more →
      </span>
    </Link>
  );
}
