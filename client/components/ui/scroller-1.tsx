"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

type OverflowType = "x" | "y" | "both";

interface ScrollerProps {
  children: React.ReactNode;
  overflow: OverflowType;
  height?: number | string;
  width?: number | string;
  withButtons?: boolean;
  childrenContainerClassName?: string;
}

const ArrowUp = () => (
  <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.93935 10.5L2.46968 9.96966L7.2929 5.14644C7.68342 4.75592 8.31659 4.75592 8.70711 5.14644L13.5303 9.96966L14.0607 10.5L13 11.5607L12.4697 11.0303L8 6.56065L3.53034 11.0303L3.00001 11.5607L1.93935 10.5Z"
    />
  </svg>
);

const ArrowDown = () => (
  <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z"
    />
  </svg>
);

const ArrowLeft = () => (
  <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 14.0607L9.96966 13.5303L5.14644 8.7071C4.75592 8.31658 4.75592 7.68341 5.14644 7.29289L9.96966 2.46966L10.5 1.93933L11.5607 2.99999L11.0303 3.53032L6.56065 7.99999L11.0303 12.4697L11.5607 13L10.5 14.0607Z"
    />
  </svg>
);

const ArrowRight = () => (
  <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.50001 1.93933L6.03034 2.46966L10.8536 7.29288C11.2441 7.68341 11.2441 8.31657 10.8536 8.7071L6.03034 13.5303L5.50001 14.0607L4.43935 13L4.96968 12.4697L9.43935 7.99999L4.96968 3.53032L4.43935 2.99999L5.50001 1.93933Z"
    />
  </svg>
);

const buttonClassName =
  "size-9 rounded-full border-[var(--hairline-ink)] bg-[rgba(247,241,230,0.045)] text-[var(--text-on-ink)] fill-current hover:bg-[rgba(247,241,230,0.1)]";

export const Scroller = ({
  children,
  overflow,
  height = "100%",
  width = "100%",
  withButtons,
  childrenContainerClassName,
}: ScrollerProps) => {
  const items = React.Children.toArray(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastScrollByWheel, setLastScrollByWheel] = useState(false);
  const [showTopOverlay, setShowTopOverlay] = useState(false);
  const [showBottomOverlay, setShowBottomOverlay] = useState(false);
  const [showLeftOverlay, setShowLeftOverlay] = useState(false);
  const [showRightOverlay, setShowRightOverlay] = useState(false);

  const updateOverlayState = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } =
      container;

    setShowTopOverlay((overflow === "y" || overflow === "both") && scrollTop > 0);
    setShowBottomOverlay(
      (overflow === "y" || overflow === "both") && scrollTop + clientHeight < scrollHeight - 1,
    );
    setShowLeftOverlay((overflow === "x" || overflow === "both") && scrollLeft > 0);
    setShowRightOverlay(
      (overflow === "x" || overflow === "both") && scrollLeft + clientWidth < scrollWidth - 1,
    );
  }, [overflow]);

  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= items.length) return;

    setCurrentIndex(index);
    itemsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const nearestIndex = () => {
    const container = containerRef.current;
    if (!container) return currentIndex;

    const containerRect = container.getBoundingClientRect();
    let nearest = currentIndex;
    let nearestDistance = Number.POSITIVE_INFINITY;

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      const rect = item.getBoundingClientRect();
      const distance =
        overflow === "y"
          ? Math.abs(rect.top - containerRect.top)
          : Math.abs(rect.left - containerRect.left);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    return nearest;
  };

  const handleButtonClick = (direction: "next" | "prev") => {
    const baseIndex = lastScrollByWheel ? nearestIndex() : currentIndex;
    scrollToIndex(direction === "next" ? baseIndex + 1 : baseIndex - 1);
    setLastScrollByWheel(false);
  };

  useEffect(() => {
    updateOverlayState();

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateOverlayState);
    window.addEventListener("resize", updateOverlayState);

    return () => {
      container.removeEventListener("scroll", updateOverlayState);
      window.removeEventListener("resize", updateOverlayState);
    };
  }, [updateOverlayState]);

  return (
    <div className="relative flex flex-col gap-3 overflow-hidden" style={{ width, height }}>
      {withButtons && overflow === "y" ? (
        <div className="z-10 flex justify-center gap-2">
          <Button
            aria-label="Scroll up"
            type="button"
            variant="outline"
            size="icon"
            className={buttonClassName}
            onClick={() => handleButtonClick("prev")}
          >
            <ArrowUp />
          </Button>
          <Button
            aria-label="Scroll down"
            type="button"
            variant="outline"
            size="icon"
            className={buttonClassName}
            onClick={() => handleButtonClick("next")}
          >
            <ArrowDown />
          </Button>
        </div>
      ) : null}

      <div
        className={clsx(
          "hide-scrollbar relative flex touch-pan-x overflow-auto scroll-smooth",
          overflow === "x" ? "flex-row snap-x snap-mandatory" : "flex-col",
          childrenContainerClassName,
        )}
        ref={containerRef}
        onWheel={() => setLastScrollByWheel(true)}
      >
        {items.map((child, index) => (
          <div
            key={index}
            className={overflow === "x" ? "snap-start shrink-0" : undefined}
            ref={(element) => {
              itemsRef.current[index] = element;
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {withButtons && overflow === "x" ? (
        <div className="z-10 flex gap-2">
          <Button
            aria-label="Scroll left"
            type="button"
            variant="outline"
            size="icon"
            className={buttonClassName}
            onClick={() => handleButtonClick("prev")}
          >
            <ArrowLeft />
          </Button>
          <Button
            aria-label="Scroll right"
            type="button"
            variant="outline"
            size="icon"
            className={buttonClassName}
            onClick={() => handleButtonClick("next")}
          >
            <ArrowRight />
          </Button>
        </div>
      ) : null}

      <div
        className={clsx(
          "pointer-events-none absolute left-0 right-0 h-10 w-full bg-gradient-to-b from-[var(--ink)] to-transparent duration-300",
          showTopOverlay ? (withButtons ? "top-12" : "top-0") : "-top-10",
        )}
      />
      <div
        className={clsx(
          "pointer-events-none absolute bottom-0 left-0 right-0 h-10 w-full bg-gradient-to-t from-[var(--ink)] to-transparent duration-300",
          showBottomOverlay ? "bottom-0" : "-bottom-10",
        )}
      />
      <div
        className={clsx(
          "pointer-events-none absolute bottom-0 top-0 h-full w-10 bg-gradient-to-r from-[var(--ink)] to-transparent duration-300",
          showLeftOverlay ? "left-0" : "-left-10",
        )}
      />
      <div
        className={clsx(
          "pointer-events-none absolute bottom-0 top-0 h-full w-10 bg-gradient-to-l from-[var(--ink)] to-transparent duration-300",
          showRightOverlay ? "right-0" : "-right-10",
        )}
      />
    </div>
  );
};
