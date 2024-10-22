"use client";

import Image from "next/image";
import { th } from "date-fns/locale";
import { format, parseISO } from "date-fns";
import { LOTTOLIST, LOTTOROUND } from "@/lib/constant/lottoList";

export default function DashboardPage() {
  const convertDate = (dateString: string) => {
    const date = parseISO(dateString);
    const formattedDate = format(date, "d MMMM yyyy", { locale: th });

    return formattedDate;
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {LOTTOLIST.map((itemTL, index) => (
        <div key={index}>
          <h1>{itemTL.btype_name}</h1>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {LOTTOROUND.filter(
              (itemLR) => itemLR.btype_code === itemTL.btype_code
            )
              .sort((a) => (a.status === "OPN" ? -1 : 1))
              .map((filtered, lrIndex) => (
                <div
                  key={lrIndex}
                  className={
                    filtered.status === "OPN"
                      ? "bg-green-200 p-2 border-2 border-green-600 flex"
                      : "bg-gray-300 p-2 border-2 border-gray-800 flex"
                  }
                >
                  <div>
                    <Image
                      src={`/assets/${filtered.nation}.png`} // นำค่า nation มาแทนที่
                      alt={`Logo of ${filtered.nation}`} // อาจใช้เพื่อช่วยในการเข้าถึง
                      width={100}
                      height={100}
                      className="w-[100px] h-[66px]"
                    />
                  </div>
                  <div className="mx-auto">
                    <p>{filtered.lot_name}</p>
                    <div className="text-center">
                      <p>{convertDate(filtered.fndate)}</p>
                      <p>
                        <span>เปิดรับ {filtered.sttime} </span>
                        <span>ถึง {filtered.fntime}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
