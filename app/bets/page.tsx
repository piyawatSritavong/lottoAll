"use client";

export default function BetsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center space-x-2 p-4 bg-background">
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
          ทั้งหมด
        </button>
        <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg">
          รอผล
        </button>
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg">
          ยกเลิก
        </button>

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

        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
          ค้นหา
        </button>
      </div>
    </div>
  );
}
