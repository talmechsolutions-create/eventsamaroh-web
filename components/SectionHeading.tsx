interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold text-brand-black relative inline-block">
        {title}
        <span className="block h-1 w-16 bg-brand-gold mx-auto mt-4 rounded-full"></span>
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
