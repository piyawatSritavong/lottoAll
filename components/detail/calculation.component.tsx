import React from "react";
import { Button } from "../ui/button";

export function CalculationComponent() {
  return (
    <div>
      <div className="bg-[#BDCDD6] p-4 my-2 rounded-lg"></div>
      <div className="bg-[#BDCDD6] p-4 my-2 rounded-lg"></div>
      <div className="bg-[#BDCDD6] p-4 my-2 rounded-lg"></div>
      <div>
        <Button>
          ยืนยันแทง
        </Button>
        <Button>
          เริ่มหใม่
        </Button>
      </div>
    </div>
  );
}
