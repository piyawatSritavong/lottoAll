
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

export function FinishedTable() {
  return (
    <div className="grid gap-4">
      <Table>
        <TableHeader className="bg-gray-300">
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead className="text-center ">เวลา</TableHead>
            <TableHead className="text-center ">ตลาด</TableHead>
            <TableHead className="text-center ">ยอดซื้อ</TableHead>
            <TableHead className="text-center ">ส่วนลด</TableHead>
            <TableHead className="text-center ">สุทธิ</TableHead>
            <TableHead className="text-center ">หมายเหตุ</TableHead>
          </TableRow>
          <TableRow>
            <TableHead colSpan={3}>รวม</TableHead>
            <TableHead className="text-center text-blue-500 font-bold text-base">0.00</TableHead>
            <TableHead className="text-center text-red-500 font-bold text-base">0.00</TableHead>
            <TableHead className="text-center  font-bold text-base">0.00</TableHead>
          </TableRow>
        </TableHeader>
      </Table>

      <Table>
        <TableHeader className="bg-neutral-50">
          <TableRow>
            <TableHead>ประเภท</TableHead>
            <TableHead className="text-center">จ่าย(บาท)</TableHead>
            <TableHead className="text-center">ลด(%)</TableHead>
            <TableHead className="text-center">ต่ำสุด(บาท)</TableHead>
            <TableHead className="text-center">สูงสุด(บาท)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
              <TableCell>-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
            </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader className="bg-red-500 bg-opacity-90">
          <TableRow>
            <TableHead>5 งวดล่าสุด</TableHead>
            <TableHead className="text-center">3ตัวตรง</TableHead>
            <TableHead className="text-center">2ตัวล่าง</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
              <TableCell>-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
            </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader className="bg-blue-500 bg-opacity-90">
          <TableRow>
            <TableHead>เลขมาแรง</TableHead>
            <TableHead className="text-center">ปิด</TableHead>
            <TableHead className="text-center">จ่ายครึ่ง</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
              <TableCell>-</TableCell>
              <TableCell className="text-center">-</TableCell>
              <TableCell className="text-center">-</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}