import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  ariaLabel,
  className = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`bg-black text-white hover:bg-white hover:text-black border-2 border-black px-8 py-3 text-lg font-semibold transition duration-300 inline-block ${className}`}
      role="button"
      aria-label={
        ariaLabel ||
        (typeof children === "string" ? children : "Call to action button")
      }
    >
      {children}
    </Link>
  );
}
