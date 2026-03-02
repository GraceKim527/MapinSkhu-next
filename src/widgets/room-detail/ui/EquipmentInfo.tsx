"use client";

import { useState } from "react";
import Image from "next/image";
import { Smile, TriangleAlert } from "lucide-react";
import { Equipment } from "../model/types";

interface EquipmentInfoProps {
  equipment: Equipment;
}

export default function EquipmentInfo({ equipment }: EquipmentInfoProps) {
  const [helpfulClicked, setHelpfulClicked] = useState(false);

  return (
    <section className="flex flex-col items-center gap-8 px-4 py-6 text-center md:px-6">
      {/* 섹션 헤더 */}
      <div className="flex flex-col items-center gap-1">
        <h2 className="typo-heading-lg text-(--mapin-gray-900)">
          강의실 기자재 정보
        </h2>
        <p className="typo-body-md-md-20 flex items-center gap-1 text-(--mapin-gray-700)">
          <TriangleAlert size={14} />
          학기 도중 변동될 수 있습니다
        </p>
      </div>

      {/* 기자재 카드 */}
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        {/* 좌석 카드 */}
        <div className="flex h-28 w-64 shrink-0 items-center justify-center gap-5 rounded-2xl bg-(--mapin-gray-200) px-8 py-4">
          <Image
            src="/images/icons/chair.svg"
            alt="의자 아이콘"
            width={36}
            height={57}
            className="shrink-0"
          />
          <div className="flex flex-col items-start gap-1.5">
            <p className="typo-body-lg-bd text-(--mapin-gray-850)">
              좌석 {equipment.seats}개
            </p>
            <p className="typo-body-md-md-20 text-(--mapin-gray-850)">
              (강사 좌석 포함)
            </p>
          </div>
        </div>

        {/* 콘센트 카드 */}
        <div className="flex h-28 w-64 shrink-0 items-center justify-center gap-5 rounded-2xl bg-(--mapin-gray-200) px-8 py-4">
          <Image
            src="/images/icons/outlet.svg"
            alt="콘센트 아이콘"
            width={40}
            height={54}
            className="shrink-0"
          />
          <div className="flex flex-col items-start gap-1.5">
            <p className="typo-body-lg-bd text-(--mapin-gray-850)">
              콘센트 {equipment.outlets}개
            </p>
            <p className="typo-body-md-md-20 text-(--mapin-gray-850)">
              (책상마다 3구 멀티탭)
            </p>
          </div>
        </div>
      </div>

      {/* 피드백 */}
      <div className="flex flex-col items-center gap-6">
        <p className="typo-body-md-md-20 text-(--mapin-gray-700)">
          위의 기자재 정보를 필요로 하는 학생 분들이 있는지 궁금해요!
          <br />
          기자재 정보가 도움이 되었다면 아래 버튼을 눌러주세요
        </p>
        <button
          onClick={() => setHelpfulClicked(true)}
          disabled={helpfulClicked}
          className="flex items-center gap-1 rounded cursor-pointer hover:bg-(--mapin-green-200) border border-(--mapin-green-400) bg-(--mapin-green-100) px-2 py-0.5 transition-opacity disabled:opacity-60"
        >
          <Image
            src="/images/icons/smile.svg"
            alt="smile"
            width={13}
            height={13}
            className="p-0.25"
          />
          <span className="typo-body-md-md-20 text-(--mapin-green-800)">
            {helpfulClicked ? "감사합니다!" : "도움이 되었어요"}
          </span>
        </button>
      </div>
    </section>
  );
}
