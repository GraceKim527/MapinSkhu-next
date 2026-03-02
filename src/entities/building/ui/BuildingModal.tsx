"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Building } from "@/entities/building/model/types";

interface BuildingModalProps {
  building: Building;
  onClose: () => void;
}

export default function BuildingModal({
  building,
  onClose,
}: BuildingModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const isExternalLink = building.link.startsWith("http");

  return (
    <>
      {/* 오버레이 */}
      <div
        className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-black/40"
        onClick={onClose}
      >
        {/* 모달 윈도우 - PC/태블릿 */}
        <div
          className="relative hidden animate-slideUp rounded-[10px] bg-transparent shadow-[0_8px_32px_0_rgba(0,0,0,0.664)] md:flex md:h-[40vh] md:w-[27vw] md:flex-col md:items-center md:justify-center"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: "modalSlideIn 1s ease-out",
          }}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute right-[5%] top-[1vh] flex h-[4.5vh] w-[3vw] cursor-pointer items-center justify-center rounded-[5px] text-[3vw] font-bold text-(--new-main-color) transition-colors hover:text-(--new-sub-color)"
          >
            ×
          </button>

          {/* 콘텐츠 */}
          <div className="absolute top-[80%] flex items-center justify-center">
            <Link
              href={building.link}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
              className="flex h-[5vh] w-[16vw] items-center justify-center rounded-[50vw] bg-(--new-sub-color) text-[17px] font-bold text-(--new-main-color) no-underline shadow-[0_8px_32px_0_var(--new-main-color)] transition-transform hover:scale-105"
            >
              {building.name} 바로가기
            </Link>
          </div>
        </div>

        {/* 모달 윈도우 - 모바일 */}
        <div
          className="fixed left-0 top-[30%] flex h-[70vh] w-full animate-slideUpMobile flex-col items-center justify-center rounded-none bg-black/55 shadow-[0_8px_32px_0_rgba(0,0,0,0.664)] md:hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 닫기 버튼 - 모바일 */}
          <button
            onClick={onClose}
            className="absolute right-[5%] top-0 flex h-[6vh] w-[6vw] cursor-pointer items-center justify-center text-[10vw] font-bold text-(--new-sub-color) transition-colors"
          >
            ×
          </button>

          {/* 콘텐츠 - 모바일 */}
          <div className="absolute top-[10%] grid grid-cols-1 grid-rows-[1.5fr_1fr] place-items-center">
            {/* 건물 이미지 */}
            <div className="relative mb-[5vh] h-[30vh] w-[60vw]">
              <img
                src={building.image}
                alt={building.name}
                className="h-full w-full object-contain"
              />
            </div>

            {/* 바로가기 버튼 */}
            <Link
              href={building.link}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
              className="mb-[20vh] flex h-[6vh] w-[60vw] items-center justify-center rounded-[50vw] bg-(--new-sub-color) text-[17px] font-bold text-(--new-main-color) no-underline shadow-[0.5vw_0.5vh_0_0_var(--new-main-color)] transition-transform hover:scale-105"
            >
              {building.name.length > 10
                ? building.name.split("/").map((name, i) => (
                    <span key={i}>
                      {name}
                      {i === 0 && <br />}
                    </span>
                  ))
                : `${building.name} 바로가기`}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            transform: scale(1.3);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideUpMobile {
          from {
            top: 90%;
          }
          to {
            top: 30%;
          }
        }

        .animate-slideUp {
          animation: modalSlideIn 1s ease-out;
        }

        .animate-slideUpMobile {
          animation: slideUpMobile 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
