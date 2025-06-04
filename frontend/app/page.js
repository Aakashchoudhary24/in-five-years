"use client"

import { ThemeToggle } from "@/components/theme/theme-toggle";
import React from "react";
import DynamicFrameLayout from "@/components/ui/dynamic-frame-layout";

export default function Home() {
  return (
    <>
      <ThemeToggle />

      <div className="relative w-full h-[100vh] overflow-hidden">
        


        <div className="relative top-[30%] z-10 flex flex-col items-cente text-whiter justify-self-center text-center motto">
          <h1 className="text-[180px] text-black">LifeMaxxing</h1>
          <span className="text-black"> <em>~ Aakash Choudhary</em> </span>
        </div>

      </div>
    </>
  );
}
