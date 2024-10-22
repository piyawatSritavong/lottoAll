"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Search } from "lucide-react";

export default function FinancePage() {
  const todayButtonRef = useRef<HTMLButtonElement>(null);
  const allButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (todayButtonRef.current) {
      todayButtonRef.current.focus();
    }

    if (allButtonRef.current) {
      allButtonRef.current.focus();
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-2 mb-4">
        <Button
          ref={todayButtonRef}
          variant={"outline"}
          className="border border-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
        >
          วันนี้
        </Button>
        <Button
          variant={"outline"}
          className="border border-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
        >
          เมื่อวาน
        </Button>
        <Button
          variant={"outline"}
          className="border border-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
        >
          สัปดาห์นี้
        </Button>
        <Button
          variant={"outline"}
          className="border border-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
        >
          สัปดาห์ที่แล้ว
        </Button>
      </div>

      <div className="flex items-center mb-4 gap-2">
        <Button
          ref={allButtonRef}
          variant={"outline"}
          className="border border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
        >
          ทั้งหมด
        </Button>
        <Button
          variant={"outline"}
          className="border border-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
        >
          ชนะ
        </Button>
        <Button
          variant={"outline"}
          className="border border-red-500 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
        >
          แพ้
        </Button>
      </div>

      <div className="container mx-auto p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">ตลาด</TableHead>
              <TableHead className="text-center">งวด</TableHead>
              <TableHead className="text-center">ยอด</TableHead>
              <TableHead className="text-center">ส่วนลด</TableHead>
              <TableHead className="text-center">ยอดส่ง</TableHead>
              <TableHead className="text-center">ถูกรางวัล</TableHead>
              <TableHead className="text-center">สรุป</TableHead>
              <TableHead className="text-center">แสดง</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* ข้อมูลแต่ละแถว */}
            <TableRow>
              <TableCell className="text-center">
                <Image
                  src="/assets/vn.png"
                  alt="Logo"
                  className="mx-auto"
                  width={80}
                  height={100}
                />
              </TableCell>
              <TableCell className="text-center">123</TableCell>
              <TableCell className="text-center">10000000</TableCell>
              <TableCell className="text-center">10000000</TableCell>
              <TableCell className="text-center">10000000</TableCell>
              <TableCell className="text-center">10000000</TableCell>
              <TableCell className="text-center">10000000</TableCell>
              <TableCell className="flex justify-center">
                <Button variant={"link"}>
                  <Search />
                </Button>
              </TableCell>
            </TableRow>
            {/* เพิ่มแถวเพิ่มเติมตามต้องการ */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
