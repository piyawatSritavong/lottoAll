"use client";

import Image from "next/image";
import { th } from "date-fns/locale";
import { format, parseISO } from "date-fns";
import { LOTTOLIST, LOTTOROUND } from "@/lib/constant/lottoList";
import Link from "next/link";

function DashboardPage() {
  const convertDate = (dateString: string) => {
    const date = parseISO(dateString);
    const formattedDate = format(date, "d MMMM yyyy", { locale: th });

    return formattedDate;
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      {LOTTOLIST.map((itemTL, index) => (
        <div key={index}>
          <h1 className="font-bold text-2xl">{itemTL.btype_name}</h1>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {LOTTOROUND.filter(
              (itemLR) => itemLR.btype_code === itemTL.btype_code
            )
              .sort((a) => (a.status === "OPN" ? -1 : 1))
              .map((filtered, lrIndex) => (
                <Link key={lrIndex} href={`/detail?id=${filtered.lot_name}`}>
                  <div
                    className={`${
                      filtered.status === "OPN"
                        ? "bg-green-200 border-green-600"
                        : "bg-gray-300 border-gray-800"
                    } p-2 border-2 flex`}
                  >
                    <div>
                      <Image
                        src={`/assets/${filtered.nation}.png`}
                        alt={`Logo of ${filtered.nation}`}
                        width={100}
                        height={100}
                        className="w-[100px] h-[66px]"
                      />
                      <p
                        className={
                          filtered.status === "OPN"
                            ? "bg-sky-500 rounded-md my-2 text-center text-white font-bold"
                            : "bg-gray-400 rounded-md my-2 text-center text-white font-bold"
                        }
                      >
                        ปิดรับ
                      </p>
                    </div>
                    <div className="mx-auto">
                      <p className="text-xl font-bold">{filtered.lot_name}</p>
                      <div
                        className={`${
                          filtered.status === "OPN"
                            ? " text-black"
                            : " text-purple-500"
                        } text-center font-bold`}
                      >
                        <p>{convertDate(filtered.rounddate)}</p>
                        <p>
                          <span className="text-blue-600">
                            เปิดรับ {filtered.sttime}{" "}
                          </span>
                          <span>ถึง </span>
                          <span className="text-red-600">
                            {filtered.fntime}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardPage;
