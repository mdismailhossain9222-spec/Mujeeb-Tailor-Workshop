import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center">
      <Image
        src="/images/mujeeb-logo-transparent.png"
        alt="Mujeeb Tailoring Workshop"
        width={230}
        height={64}
        className="object-contain w-auto h-14 md:h-16"
        priority
      />
    </span>
  );
}