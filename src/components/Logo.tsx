import { Scissors } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-dark shadow-[0_10px_24px_-8px_rgba(234,88,12,0.6)]">
        <Scissors className="size-[22px] text-white" strokeWidth={2.1} />
      </span>
      <span className="leading-none">
        <span
          className={`block font-serif text-[19px] font-extrabold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Mujeeb Tailoring
        </span>
        <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[0.42em] text-brand">
          Workshop
        </span>
      </span>
    </span>
  );
}
