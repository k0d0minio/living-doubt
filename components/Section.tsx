import { useId } from "react";

/** A page section with a short uppercase label above its title. */
export function Section({
  id,
  label,
  title,
  className = "",
  children,
}: {
  id?: string;
  label?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const titleId = useId();
  return (
    <section id={id} aria-labelledby={title ? titleId : undefined} className={`py-section ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {label && <p className="mb-4 font-display text-label uppercase text-bronze">{label}</p>}
        {title && (
          <h2 id={titleId} className="mb-8 text-h2">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
