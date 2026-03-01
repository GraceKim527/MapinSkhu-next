"use client";

import { Building } from "@/entities/building/model/types";

interface BuildingIconProps {
  building: Building;
  onClick: () => void;
  isActive: boolean;
}

export default function BuildingIcon({
  building,
  onClick,
  isActive,
}: BuildingIconProps) {
  const getPositionStyles = () => {
    const { pc, tablet, mobile } = building.position;

    return {
      top: pc.top,
      left: pc.left,
      right: pc.right,
      "--tablet-top": tablet.top,
      "--tablet-left": tablet.left,
      "--tablet-right": tablet.right,
      "--mobile-top": mobile.top,
      "--mobile-left": mobile.left,
      "--mobile-right": mobile.right,
    } as React.CSSProperties;
  };

  return (
    <div
      className="absolute cursor-pointer transition-opacity duration-300"
      style={getPositionStyles()}
      onClick={onClick}
    >
      {/* PC/태블릿 */}
      <div className="hidden md:block">
        <img
          src={building.icon}
          alt={building.name}
          className={`animate-bounce transition-opacity duration-300 md:w-[3.5vw] lg:w-[4vw] ${
            isActive ? "opacity-100" : "opacity-100"
          }`}
          style={{
            filter: "drop-shadow(0.5vw 0.5vw 0.5vw var(--new-main-color))",
            height: "auto",
          }}
        />
      </div>

      {/* 모바일 */}
      <div className="block md:hidden">
        <img
          src={building.icon}
          alt={building.name}
          className={`animate-bounce transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-100"
          }`}
          style={{
            filter: "drop-shadow(0.5vw 0.5vw 0.5vw var(--new-main-color))",
            width: "7vw",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
