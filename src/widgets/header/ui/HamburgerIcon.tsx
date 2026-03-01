"use client";

import { cn } from "@/shared/lib/utils";

interface HamburgerIconProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

export default function HamburgerIcon({ isMenuOpen, onClick }: HamburgerIconProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex h-[60px] w-[60px] shrink-0 cursor-pointer items-center justify-center"
      aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
      aria-expanded={isMenuOpen}
    >
      <div className="relative h-[18px] w-[20px]" aria-hidden="true">
        {/* 위 라인 */}
        <span
          className={cn(
            "absolute left-0 top-0 h-[2px] w-full bg-(--new-main-color) transition-transform duration-500",
            isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
          )}
        />
        {/* 중간 라인 (2개로 분할) */}
        <span
          className={cn(
            "absolute left-0 top-1/2 h-[2px] w-[10px] -translate-y-1/2 bg-(--new-main-color) transition-opacity duration-500",
            isMenuOpen ? "opacity-0" : "opacity-100"
          )}
        />
        <span
          className={cn(
            "absolute left-0 top-1/2 h-[2px] w-[10px] -translate-y-1/2 translate-x-[10px] bg-(--new-main-color) transition-opacity duration-500",
            isMenuOpen ? "opacity-0" : "opacity-100"
          )}
        />
        {/* 아래 라인 */}
        <span
          className={cn(
            "absolute bottom-0 left-0 h-[2px] w-full bg-(--new-main-color) transition-transform duration-500",
            isMenuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
          )}
        />
      </div>
    </button>
  );
}
