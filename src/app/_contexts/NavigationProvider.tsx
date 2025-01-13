"use client";

import React, { createContext, useState, useContext } from "react";

export interface NavigationData {
  currentScreen: string;
  validate: (event: React.ChangeEvent) => boolean;
  showNext: boolean;
  showPrevious: boolean;
  nextButtonText: string;
  previousButtonText: string;
  previousButtonBottom: boolean;
}

export interface NavigationContextType {
  navigationData: NavigationData;
  setCurrentScreen: (
    currentScreen: string,
    validate?: (event: React.ChangeEvent) => boolean,
    showNext?: boolean,
    showPrevious?: boolean,
    nextButtonText?: string,
    previousButtonText?: string,
    previousButtonBottom?: boolean,
  ) => void;
}

export const NavigationContext = createContext<NavigationContextType | null>(
  null,
);

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navigationData, setNavigationData] = useState<NavigationData>({
    currentScreen: "",
    validate: () => true,
    showNext: true,
    showPrevious: true,
    nextButtonText: "",
    previousButtonText: "",
    previousButtonBottom: false,
  });

  const setCurrentScreen = (
    currentScreen: string,
    validate?: (event: React.ChangeEvent) => boolean,
    showNext?: boolean,
    showPrevious?: boolean,
    nextButtonText?: string,
    previousButtonText?: string,
    previousButtonBottom?: boolean,
  ) => {
    setNavigationData({
      currentScreen: currentScreen,
      validate: validate === undefined ? () => true : validate,
      showNext: showNext === undefined ? true : showNext,
      showPrevious: showPrevious === undefined ? true : showPrevious,
      nextButtonText: nextButtonText ? nextButtonText : "",
      previousButtonText: previousButtonText ? previousButtonText : "",
      previousButtonBottom:
        previousButtonBottom === undefined ? false : previousButtonBottom,
    });
  };
  return (
    <NavigationContext.Provider value={{ navigationData, setCurrentScreen }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "NavigationContext must be used within a NavigationContextProvider",
    );
  }
  return context;
};
