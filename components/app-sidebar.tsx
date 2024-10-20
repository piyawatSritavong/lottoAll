import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "./ui/button";
import { KeyRound, LogOut } from "lucide-react";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      name: "UserName",
      credit: 1000000.0,
      amnt: 195.0,
      disc: 0.0,
      usecredit: 195.0,
      winamnt: 100.0,
      blcredit: 905.0,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Image
          src={"/assets/vn.png"}
          alt="Logo"
          width={180}
          height={180}
          className="mx-auto my-2"
        />
      </SidebarHeader>
      <SidebarContent className="p-3 bg-[#19376D] text-white font-bold">
        {data.navMain.map((item, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem className="flex justify-between text-base">
                  <div>
                    <h2>สมาชิก</h2>
                    <h2>ยอดวงเงิน</h2>
                    <h2>ยอดพนัน</h2>
                    <h2>ส่วนลด</h2>
                    <h2>สุทธิ</h2>
                    <h2>ถูกรางวัล</h2>
                    <h2>คงเหลือ</h2>
                  </div>
                  <div className="text-right">
                    <h2>{item.name}</h2>
                    <h2>{item.credit}</h2>
                    <h2 className="text-red-500">{item.amnt}</h2>
                    <h2 className="text-emerald-500">{item.disc}</h2>
                    <h2 className="text-red-500">{item.usecredit}</h2>
                    <h2 className="text-sky-500">{item.winamnt}</h2>
                    <h2>{item.blcredit}</h2>
                  </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <Button className="bg-blue-500">
          <KeyRound />
          เปลี่ยนรหัสผ่าน
        </Button>
        <Button className="bg-red-500">
          <LogOut className=" rotate-180" />
          ออกจากระบบ
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
