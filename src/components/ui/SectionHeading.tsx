import FadeIn from "../animations/FadeIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <FadeIn className={`mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-500 max-w-2xl">{subtitle}</p>
      )}
    </FadeIn>
  );
}
