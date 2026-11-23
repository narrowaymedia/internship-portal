"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type ComponentType } from "react";

export type BpKey = "Desktop" | "Tablet" | "Phone";
const KEYS: BpKey[] = ["Desktop", "Tablet", "Phone"];
// Same breakpoints as the Framer site: desktop >= 1200, tablet 810–1199, phone < 810.
const HIDE: Record<BpKey, string> = {
  Desktop: "bp-hide-t bp-hide-p",
  Tablet: "bp-hide-d bp-hide-p",
  Phone: "bp-hide-d bp-hide-t",
};

function currentBp(): BpKey {
  if (window.matchMedia("(min-width: 1200px)").matches) return "Desktop";
  if (window.matchMedia("(min-width: 810px)").matches) return "Tablet";
  return "Phone";
}

let shared: BpKey | null = null;
const subs = new Set<(b: BpKey) => void>();
function ensureListener() {
  if (typeof window === "undefined" || (ensureListener as any).done) return;
  (ensureListener as any).done = true;
  const on = () => {
    const b = currentBp();
    if (b !== shared) {
      shared = b;
      subs.forEach((f) => f(b));
    }
  };
  window.addEventListener("resize", on);
}

export function useBp(): BpKey | null {
  const [bp, setBp] = useState<BpKey | null>(null);
  useEffect(() => {
    ensureListener();
    shared = currentBp();
    // Hydrate with every breakpoint copy (matches the server HTML), then keep only the active one
    // (the hidden copies are display:none via media queries until then), like Framer does.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBp(shared);
    subs.add(setBp);
    return () => {
      subs.delete(setBp);
    };
  }, []);
  return bp;
}

/**
 * Renders a Framer code component the way Framer does: the server sends one copy per
 * breakpoint (hidden with media queries), and after hydration only the active copy stays.
 */
export function Bp({
  C,
  props,
  ov,
  extra,
  wrap = true,
}: {
  C: ComponentType<any>;
  props: Record<string, any>;
  ov?: Partial<Record<BpKey, Record<string, any>>>;
  extra?: Record<string, any>;
  wrap?: boolean;
}) {
  const bp = useBp();
  const keys = bp ? [bp] : KEYS;
  const inner = keys.map((k) => (
    <div key={k} className={bp ? "ssr-variant" : `ssr-variant ${HIDE[k]}`}>
      <C {...props} {...(ov?.[k] || {})} {...(extra || {})} />
    </div>
  ));
  if (!wrap) return <>{inner}</>;
  return (
    <div className="fr-sec">
      <div className="fr-container">{inner}</div>
    </div>
  );
}
