"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function BetsPage() {
  const allButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedValue, setSelectedValue] = useState("อ้างอิง"); 

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

        <Select value={selectedValue} onValueChange={setSelectedValue}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="อ้างอิง">อ้างอิง</SelectItem>
          </SelectContent>
        </Select>

        <Input type="text" placeholder="ค้นหา" />

        <Button className="border border-black hover:bg-black hover:text-white focus:bg-black focus:text-white">
          ค้นหา
        </Button>
      </div>
    </div>
  );
}

export default BetsPage;
