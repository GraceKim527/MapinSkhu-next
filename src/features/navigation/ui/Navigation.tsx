"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { icon: "🗺️", label: "소개", href: "/introduce" },
  { number: "1", label: "승연관", href: "/sy_gwan" },
  { number: "2", label: "일만관", href: "/im_gwan" },
  { number: "3", label: "월당관", href: "/wd_gwan" },
  { number: "5", label: "나눔관", href: "/nn_gwan" },
  { number: "6", label: "정보과학관", href: "/jg_gwan" },
  { number: "7", label: "새천년관", href: "/scn_gwan" },
  { number: "8", label: "중앙도서관", href: "https://library.skhu.ac.kr/" },
  { number: "9", label: "피츠버그홀", href: "/pb_hall" },
  { number: "11", label: "미가엘관", href: "/mgell_gwan" },
];

interface NavigationProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

export default function Navigation({ isMenuOpen, onClose }: NavigationProps) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* 배경 오버레이 */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />
      )}

      {/* 사이드바 메뉴 */}
      <div
        className={`fixed left-0 top-0 z-40 h-full w-[300px] bg-white transition-transform duration-250 ${
          isMenuOpen
            ? "translate-x-0 shadow-[2px_2px_6px_rgba(0,0,0,0.4)]"
            : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* 메뉴 헤더 */}
          <div className="block h-[8%]">
            <Link href="/" className="absolute left-[60px] top-[16px]">
              <Image
                src="/images/logo/logo.svg"
                alt="MapinSKHU"
                width={180}
                height={60}
                className="w-[180px]"
              />
            </Link>
          </div>

          {/* 메뉴 리스트 */}
          <div className="mx-[10%] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[var(--new-main-color)] scrollbar-track-transparent">
            <ul className="flex flex-col gap-[20px] p-[10px] text-center">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="group relative flex h-[40px] items-center justify-center overflow-hidden rounded-[5px] bg-white shadow-sm transition-colors duration-300"
                >
                  <div className="absolute inset-0 origin-left scale-x-0 bg-(--new-main-color) transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <Link
                    href={item.href}
                    className="relative flex w-full items-center no-underline"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className="block w-[30%] text-(--new-main-color) transition-colors duration-300 group-hover:text-white">
                      {item.icon || item.number}
                    </span>
                    <span className="block text-(--new-main-color) transition-colors duration-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 메뉴 푸터 */}
          <div className="m-auto block pb-[10%]">
            <Link
              href="/feedback"
              className="text-[1.3rem] text-black no-underline"
            >
              개발자에게 피드백하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
