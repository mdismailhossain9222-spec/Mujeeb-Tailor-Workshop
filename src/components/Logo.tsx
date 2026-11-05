import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center">
      <Image
        src="/images/mujeeb-logo-transparent.png"
        alt="Mujeeb Tailoring Workshop"
        width={180}
        height={50}
        className="object-contain w-[150px] h-[42px] sm:w-[180px] sm:h-[50px]"
        priority
      />
    </span>
  );
}