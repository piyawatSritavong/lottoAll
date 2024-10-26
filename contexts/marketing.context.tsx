"use client";

import React, { createContext, useContext, useState } from "react";

interface IMatketingContext {
  isDisable: boolean;
  disableAll: () => void;
  enableAll: () => void;
}

const MatketingContext = createContext<IMatketingContext | undefined>(undefined);

export function MatketingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDisable, setIsDisable] = useState(false);

  const disableAll = () => {
    setIsDisable(true);
  };
  const enableAll = () => {
    setIsDisable(false);
  };

  return (
    <MatketingContext.Provider value={{ isDisable, disableAll, enableAll }}>
      {children}
    </MatketingContext.Provider>
  );
}

export function useMatketingContext() {
  const context = useContext(MatketingContext);

  if (context === undefined) {
    throw new Error(
      "useMatketingContext must be used whithin a MatketingContextProvider"
    );
  }

  return context;
}
