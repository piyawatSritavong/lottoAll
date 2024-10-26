"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

function BetsPage() {
  const allButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (allButtonRef.current) {
      allButtonRef.current.focus();
    }
  }, []);
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center space-x-2 bg-background">
        <Button
          ref={allButtonRef}
          variant={"outline"}
          className="border border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
        >
          ทั้งหมด
        </Button>
        <Button
          variant={"outline"}
          className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white"
        >
          รอผล
        </Button>
        <Button
          variant={"outline"}
          className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
        >
          ยกเลิก
        </Button>

        <select className="border border-zinc-300 rounded-lg px-4 py-2">
          <option>อ้างอิง</option>
          <option>ตัวเลือก 1</option>
          <option>ตัวเลือก 2</option>
        </select>

        <input
          type="text"
          placeholder="ค้นหา"
          className="border border-zinc-300 rounded-lg px-4 py-2 flex-grow"
        />

        <Button className="border border-black hover:bg-black hover:text-white focus:bg-black focus:text-white">
          ค้นหา
        </Button>
      </div>
    </div>
  );
}

export default BetsPage;
