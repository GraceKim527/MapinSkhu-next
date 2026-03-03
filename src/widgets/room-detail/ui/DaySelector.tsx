"use client";

import { cn } from "@/shared/lib/utils";
import { DAYS } from "../model/constants";
import { getDayIndex } from "../lib/time";

interface DaySelectorProps {
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

export default function DaySelector({ selectedDay, onSelectDay }: DaySelectorProps) {
  const todayIndex = getDayIndex(new Date());

  return (
    <div className="flex justify-around px-4 py-3 md:hidden">
      {DAYS.map((day, index) => (
        <button
          key={day}
          type="button"
          onClick={() => onSelectDay(index)}
          className={cn(
            "flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full text-[14px]",
            selectedDay === index
              ? "border border-(--mapin-green-400) bg-(--mapin-green-100) font-bold text-(--mapin-green-800)"
              : "border border-(--mapin-gray-450) font-medium text-(--mapin-gray-800)",
          )}
          aria-current={todayIndex === index ? "date" : undefined}
        >
          {day}
        </button>
      ))}
    </div>
  );
}
