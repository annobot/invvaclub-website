import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-11 w-11", priority = false }: Props) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <span className="absolute inset-0 overflow-hidden rounded-full shadow-[5px_5px_10px_#071115,-3px_-3px_8px_#16343d]">
        <Image
          src="/images/logo.png"
          alt="Invva Club"
          fill
          className="object-cover object-[50%_30%]"
          sizes="80px"
          priority={priority}
        />
      </span>
    </span>
  );
}
