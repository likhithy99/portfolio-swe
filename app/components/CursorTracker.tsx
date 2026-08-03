"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [tabindex]';

function getEnabledSnapshot() {
  return (
    !window.matchMedia("(pointer: coarse)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getServerSnapshot() {
  return false;
}

function subscribeToPreferenceChanges(callback: () => void) {
  const coarse = window.matchMedia("(pointer: coarse)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  coarse.addEventListener("change", callback);
  reduced.addEventListener("change", callback);
  return () => {
    coarse.removeEventListener("change", callback);
    reduced.removeEventListener("change", callback);
  };
}

export default function CursorTracker() {
  const enabled = useSyncExternalStore(
    subscribeToPreferenceChanges,
    getEnabledSnapshot,
    getServerSnapshot
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const el = containerRef.current;
    if (!el) return;

    // Target = raw pointer position, current = eased position we render.
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    let raf = 0;
    let visible = false;

    const render = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        el.style.opacity = "1";
      }
      const hit = (e.target as Element | null)?.closest?.(
        INTERACTIVE_SELECTOR
      );
      el.classList.toggle("is-active", Boolean(hit));
    };

    const onLeave = () => {
      visible = false;
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      className="cursor-tracker"
      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
      aria-hidden="true"
    >
      <div className="cursor-tracker__ring">
        <span className="cursor-tracker__tick cursor-tracker__tick--n" />
        <span className="cursor-tracker__tick cursor-tracker__tick--s" />
        <span className="cursor-tracker__tick cursor-tracker__tick--e" />
        <span className="cursor-tracker__tick cursor-tracker__tick--w" />
      </div>
      <div className="cursor-tracker__dot" />
    </div>
  );
}
