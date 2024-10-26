"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CalculationComponent, ResultComponent } from "@/components/detail";

function DetailPage() {
  const params = useSearchParams();
  const [lottoValue, setLottoValue] = useState("");

  useEffect(() => {
    const getValue = params.get("id");
    if (getValue) {
      setLottoValue(getValue);
    }
  }, []);

  return (
    <div>
      <h1>Lottery : {lottoValue}</h1>
      <CalculationComponent />
      <ResultComponent />
    </div>
  );
}

export default DetailPage;
