"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/app/lib/analytics";

type Props = {
  location: "footer" | "hero" | "header";
  children: React.ReactNode;
  className?: string;
};

export default function CtaLink({ location, children, className }: Props) {
  const pathname = usePathname();

  const handleClick = () => {
    trackEvent("cta_click", {
      location,
      page: pathname,
    });
  };

  return (
    <Link href="/contact" className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
