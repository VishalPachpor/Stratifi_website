// components/NotchedCard.tsx
export default function NotchedCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative isolate p-3 sm:p-4 md:p-6 lg:p-8 bg-white text-black shadow-sm
        ring-1 ring-black/10 hover:ring-[#c479fe]/30 transition-all duration-300
        [--n:18px]
        [clip-path:polygon(var(--n)_0,calc(100%_-_var(--n))_0,100%_var(--n),100%_100%,0_100%,0_var(--n))]
        hover:shadow-lg hover:scale-[1.02] hover:bg-[#fafafa]
        min-h-48 sm:min-h-56 md:min-h-72 lg:min-h-80 w-full flex flex-col justify-center items-center
      "
    >
      <h3 className="uppercase font-semibold tracking-wide text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base flex-shrink-0 break-words leading-tight text-center flex items-center justify-center">
        {title}
      </h3>
      <div className="leading-tight sm:leading-relaxed text-black/70 text-xs sm:text-sm md:text-base flex-1 overflow-visible break-words text-center hyphens-auto flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
