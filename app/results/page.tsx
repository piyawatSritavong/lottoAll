"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { th } from "date-fns/locale";
import { format, parseISO } from "date-fns";
import { LOTTOLIST, LOTTORESULT } from "@/lib/constant/lottoList";

function ResultsPage() {
  const convertDate = (dateString: string) => {
    const date = parseISO(dateString);
    const formattedDate = format(date, "d MMMM yyyy", { locale: th });

    return formattedDate;
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      {LOTTOLIST.map((itemTL, index) => (
        <div key={index} className="py-2">
          <h1 className="bg-gray-300 font-bold text-2xl text-black px-4 py-2">
            {itemTL.btype_name}
          </h1>
          <Table>
            <TableHeader>
              <TableRow className="bg-black text-base hover:bg-black">
                <TableHead className="w-80 text-white ">ชนิดหวย</TableHead>
                <TableHead className="text-white text-center">
                  ชื่องวด
                </TableHead>
                <TableHead className="text-white text-center">
                  3 ตัวบน
                </TableHead>
                <TableHead className="text-white text-center">
                  2 ตัวล่าง
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {LOTTORESULT.filter(
                (itemLR) => itemLR.btype_code === itemTL.btype_code
              ).map((filtered, lrIndex) => (
                <TableRow key={lrIndex}>
                  <TableCell className="flex font-medium">
                    <Image
                      src={`/assets/${filtered.nation}.png`}
                      alt={`Logo of ${filtered.nation}`}
                      width={100}
                      height={100}
                      className="w-[45px] h-[30px]"
                    />
                    <span className="px-2 my-auto">
                    {filtered.lot_name}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    {convertDate(filtered.rounddate)}
                  </TableCell>
                  <TableCell className="text-center">
                    {filtered.win3up}
                  </TableCell>
                  <TableCell className="text-center">
                    {filtered.win2dw}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}

      {/* {LOTTOLIST.map((itemTL, index) => (
        <div key={index}>
          <h1>{itemTL.btype_name}</h1>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {LOTTORESULT.filter(
              (itemLR) => itemLR.btype_code === itemTL.btype_code
            ).map((filtered, lrIndex) => (
              <div key={lrIndex}>
                <div className="mx-auto">
                  <p className="text-xl font-bold">{filtered.lot_name}</p>
                  <div>
                    <p>{convertDate(filtered.rounddate)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default ResultsPage;