"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "interactive";

const interactiveSelector =
  'a, button, [role="button"], input, textarea, select, summary, [data-cursor="hover"]';

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [mode, setMode] = useState<CursorMode>("default");
  const [isPointerDown, setIsPointerDown] = useState(false);

  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");

    const applyActivation = () => {
      document.body.classList.toggle("custom-cursor-active", finePointer.matches);
      setMounted(finePointer.matches);
    };

    applyActivation();

    const handlePointerMove = (event: PointerEvent) => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        setX(event.clientX);
        setY(event.clientY);
        setVisible(true);

        const target = event.target instanceof Element ? event.target.closest(interactiveSelector) : null;
        setMode(target ? "interactive" : "default");
      });
    };

    const handlePointerDown = () => setIsPointerDown(true);
    const handlePointerUp = () => setIsPointerDown(false);

    const handlePointerOut = (event: MouseEvent) => {
      const relatedTarget = event.relatedTarget instanceof Element ? event.relatedTarget.closest(interactiveSelector) : null;

      if (!relatedTarget) {
        setMode("default");
      }
    };

    const handleMediaChange = () => {
      applyActivation();
      if (!finePointer.matches) {
        setVisible(false);
        setMode("default");
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("mouseout", handlePointerOut);
    finePointer.addEventListener("change", handleMediaChange);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("mouseout", handlePointerOut);
      finePointer.removeEventListener("change", handleMediaChange);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

    };
  }, []);

  if (!mounted) {
    return null;
  }

  const isInteractive = mode === "interactive";

  return (
    <div
      aria-hidden="true"
      className={`fixed left-0 top-0 z-[9999] pointer-events-none hidden md:block transition-[opacity,transform] duration-150 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`absolute left-1/2 top-1/2 transition-all duration-200 ${
          isInteractive ? "h-6 w-6" : "h-5 w-5"
        } ${isPointerDown ? "scale-75" : "scale-100"}`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className={`h-full w-full transition-all duration-200 ${
            isInteractive ? "text-primary" : "text-primary/85"
          }`}
          style={{ transform: "rotate(325deg)" }}
          aria-hidden="true"
        >
          <path
            d="M12 3 L3 21 Q12 14 21 21 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;