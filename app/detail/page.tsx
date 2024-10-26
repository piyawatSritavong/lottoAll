"use client";

import React from "react";
import { CalculationComponent, ResultComponent } from "@/components/detail";

function DetailPage() {

  return (
    <div className="flex justify-between gap-2">
      <CalculationComponent />
      <ResultComponent />
    </div>
  );
}

export default DetailPage;
