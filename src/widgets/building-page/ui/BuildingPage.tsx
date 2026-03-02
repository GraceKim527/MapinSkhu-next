import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Building } from "@/entities/building/model/types";
import { getClassroomsByBuilding } from "@/entities/classroom/lib/data";

interface BuildingPageProps {
  building: Building;
}

export default function BuildingPage({ building }: BuildingPageProps) {
  const classrooms = getClassroomsByBuilding(building.slug);
  const floors = [...new Set(classrooms.map((c) => c.floor))].sort(
    (a, b) => a - b,
  );

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
        <Link
          href="/"
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full hover:bg-gray-100"
          aria-label="지도로 돌아가기"
        >
          <ArrowLeft size={20} className="text-(--new-main-color)" />
        </Link>
        <h1 className="text-lg font-bold text-(--new-main-color)">
          {building.name}
        </h1>
      </header>

      <main className="flex-1 p-4">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={building.image}
              alt={`${building.name} 건물 이미지`}
              width={600}
              height={400}
              className="h-auto w-full"
              priority
            />
          </div>

          <section className="mt-6" aria-labelledby="classroom-list-heading">
            <h2
              id="classroom-list-heading"
              className="mb-3 text-base font-semibold text-gray-900"
            >
              강의실 목록
            </h2>

            {floors.length === 0 ? (
              <p className="text-sm text-gray-500">
                강의실 정보가 준비 중입니다.
              </p>
            ) : (
              <div className="flex flex-col gap-6">
                {floors.map((floor) => {
                  const floorClassrooms = classrooms.filter(
                    (c) => c.floor === floor,
                  );
                  return (
                    <div key={floor}>
                      <h3 className="mb-2 text-sm font-semibold text-(--new-main-color)">
                        {floor}층
                      </h3>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                        {floorClassrooms.map((room) => (
                          <Link
                            key={room.id}
                            href={`/${building.slug}/${room.classroomNumber}`}
                            className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-3 text-sm font-medium text-gray-800 transition-colors hover:border-(--new-main-color) hover:bg-green-50 hover:text-(--new-main-color)"
                          >
                            {room.classroomNumber}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
