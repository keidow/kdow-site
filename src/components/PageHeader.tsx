import Image from "next/image";

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  artworkSrc?: string;
  artworkWidth?: number;
  artworkHeight?: number;
}

export default function PageHeader({
  label,
  title,
  description,
  artworkSrc,
  artworkWidth,
  artworkHeight,
}: PageHeaderProps) {
  const isStrip = artworkWidth && artworkHeight && artworkWidth / artworkHeight > 2.5;

  return (
    <div className="border-b border-[var(--border)] overflow-hidden">
      {artworkSrc && !isStrip ? (
        /* Split layout — square-ish artwork in right column */
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] items-stretch">
          <div className="py-16 md:py-24 px-6 lg:px-8">
            {label && (
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent)] font-medium mb-4">
                {label}
              </p>
            )}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--foreground)] max-w-2xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
                {description}
              </p>
            )}
          </div>
          <div className="relative hidden md:block" style={{ minHeight: "220px" }} aria-hidden="true">
            <Image
              src={artworkSrc}
              alt=""
              fill
              className="object-cover object-center"
              style={{ opacity: 0.78 }}
            />
          </div>
        </div>
      ) : artworkSrc && isStrip ? (
        /* Strip layout — wide panoramic artwork below the text */
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-16 md:pt-24 pb-10 md:pb-14">
          {label && (
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent)] font-medium mb-4">
              {label}
            </p>
          )}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--foreground)] max-w-2xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
              {description}
            </p>
          )}
          <div className="hidden md:block mt-10" aria-hidden="true">
            <Image
              src={artworkSrc}
              alt=""
              width={artworkWidth!}
              height={artworkHeight!}
              className="h-auto w-full max-w-xl"
              style={{ opacity: 0.78 }}
              unoptimized
            />
          </div>
        </div>
      ) : (
        /* No artwork */
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          {label && (
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent)] font-medium mb-4">
              {label}
            </p>
          )}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--foreground)] max-w-2xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
