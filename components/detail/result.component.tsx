import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinishedTable, CanceledTable } from "./index";

export function ResultComponent() {
  return (
    <div className="w-1/2">
      <Tabs defaultValue="finished">
        <TabsList className="bg-transparent flex gap-2">
          <TabsTrigger
            value="finished"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            ยืนยันแล้ว
          </TabsTrigger>
          <TabsTrigger
            value="canceled"
            className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white data-[state=active]:bg-red-500 data-[state=active]:text-white"
          >
            ยกเลิกแล้ว
          </TabsTrigger>
        </TabsList>
        <TabsContent value="finished">
          <FinishedTable />
        </TabsContent>
        <TabsContent value="canceled">
          <CanceledTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
