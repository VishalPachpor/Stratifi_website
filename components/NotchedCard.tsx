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
        relative isolate p-6 md:p-8 bg-white text-black shadow-sm
        ring-1 ring-black/10 hover:ring-[#c479fe]/30 transition-all duration-300
        [--n:18px]
        [clip-path:polygon(var(--n)_0,calc(100%_-_var(--n))_0,100%_var(--n),100%_100%,0_100%,0_var(--n))]
        hover:shadow-lg hover:scale-[1.02] hover:bg-[#fafafa]
        min-h-80 w-full flex flex-col
      "
    >
      <h3 className="uppercase font-semibold tracking-wide text-black mb-4 text-sm md:text-base flex-shrink-0 break-words">
        {title}
      </h3>
      <div className="leading-6 text-black/70 text-sm md:text-base flex-1 overflow-visible break-words">
        {children}
      </div>
    </div>
  );
}
