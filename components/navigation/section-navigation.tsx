"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "../i18n/language-provider";
import type { ComponentProps, MouseEvent } from "react";

function scrollToPath(path: string) {
  const section = path === "/" ? "home" : path.slice(1);
  const target = document.getElementById(section);
  if (!target) return;
  const headerHeight = document.querySelector("header.nav")?.getBoundingClientRect().height ?? 90;
  window.scrollTo({
    top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - headerHeight),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  });
}

/** Scroll after a route commits, including direct visits and browser history. */
export function RouteSectionScroll() {
  const pathname = usePathname();
  const { language } = useLanguage();
  useEffect(() => {
    let cancelled = false;
    const cancelCorrection = () => { cancelled = true; };
    const events = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
    events.forEach(event => window.addEventListener(event, cancelCorrection, { passive: true }));
    const frame = requestAnimationFrame(() => {
      scrollToPath(pathname);
      // Tamil font loading can change every section's height after hydration.
      void document.fonts.ready.then(() => {
        if (!cancelled) scrollToPath(pathname);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      events.forEach(event => window.removeEventListener(event, cancelCorrection));
    };
  }, [pathname, language]);
  return null;
}

export function SectionLink({ href, ...props }: Omit<ComponentProps<typeof Link>, "href" | "onClick" | "scroll"> & { href: string }) {
  const pathname = usePathname();
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (pathname === href) {
      event.preventDefault();
      scrollToPath(href);
    }
  }
  return <Link {...props} href={href} scroll={false} onClick={handleClick} />;
}
