import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CalculationComponent() {
  const params = useSearchParams();
  const [lottoValue, setLottoValue] = useState("");
  const allButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedValue, setSelectedValue] = useState("จ่าย:100");

  useEffect(() => {
    if (allButtonRef.current) {
      allButtonRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const getValue = params.get("id");
    if (getValue) {
      setLottoValue(getValue);
    }
  }, []);

  return (
    <div className="w-1/2">
      <div className="flex justify-between bg-[#BDCDD6] p-2 rounded-lg">
        <div className="grid gap-2">
          <Image
            src={`/assets/vn.png`}
            alt={`Logo of vn`}
            width={100}
            height={100}
            className="w-[75px] h-[50px]"
          />

          <div className="flex gap-2">
            <Button className="border h-8 border-black hover:bg-black hover:text-white focus:bg-black focus:text-white">
              3ตัวท้าย
            </Button>

            <Select value={selectedValue} onValueChange={setSelectedValue}>
              <SelectTrigger className="w-24 h-8">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="จ่าย:100">จ่าย:100</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="font-bold text-black text-right">
          <h1 className="text-xl">{lottoValue}</h1>
          <h2>{format(new Date(), "yyyy-MM-dd")}</h2>
          <p className="text-blue-500">เปิดรับ</p>
          <p className="text-red-500">ปิดรับ</p>
        </div>
      </div>
      <div className="bg-[#BDCDD6] p-2 my-2 rounded-lg flex gap-2">
        <Button
          ref={allButtonRef}
          variant={"outline"}
          className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
        >
          แทงเร็ว
        </Button>
        <Button
          variant={"outline"}
          className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
        >
          วางเลย
        </Button>
        <Button
          variant={"outline"}
          className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
        >
          กรอกแถว
        </Button>
      </div>
      <div className="bg-[#BDCDD6] p-2 my-2 rounded-lg grid gap-2">
        <div className=" flex gap-2 flex-wrap">
          <Button
            ref={allButtonRef}
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            2ตัว
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            3ตัว
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            วิ่ง
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            6กลับ
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            รูด
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            หน้า
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            หลัง
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            เบิ้ล
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            ตอง
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            วิน
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            ต่ำ
          </Button>
          <Button
            variant={"outline"}
            className="border h-8 bg-transparent border-black hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            สูง
          </Button>
        </div>

        <h2 className="font-bold text-black">จำนวน 0 ตัว</h2>

        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="เลข"
            className="text-center appearance-none"
          />
          <Button>กลับ</Button>
          <Input
            type="number"
            placeholder="บน"
            className="text-center appearance-none"
          />
          <Input
            type="number"
            placeholder="ล่าง"
            className="text-center appearance-none"
          />
          <Button className="bg-sky-500">+ โพย</Button>
        </div>
      </div>

      <div>
        <div className="flex gap-4">
          <Input type="text" placeholder="เตือนความจำ" />
          <div>
            <Image
              src={`/assets/vn.png`}
              alt={`Logo of vn`}
              width={100}
              height={100}
              className="w-[70px] h-[35px]"
            />

            <p className="bg-red-500 rounded-md my-2 text-center text-white font-bold">
              ปิดรับ
            </p>
          </div>
        </div>
        <div className="grid gap-2 text-center font-bold">
          <h1 className="text-xl">{lottoValue}</h1>
          <h2 className="text-base text-blue-500">
            งวดวันที่ {format(new Date(), "yyyy-MM-dd")}
          </h2>
          <h2 className="text-2xl">0.00</h2>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button className="bg-sky-500 w-32 py-6">ยืนยันแทง</Button>
          <Button className="bg-orange-500 w-32 py-6">เริ่มใหม่</Button>
        </div>
      </div>
    </div>
  );
}
