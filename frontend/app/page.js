"use client"

import { ThemeToggle } from "@/components/theme/theme-toggle";
import Navbar from "@/components/ui/navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar/>
      <ThemeToggle />
      <div className="relative flex top-50 justify-center">
        <div className="z-10 top-50 bottom-50 text-center motto">
          <h1 className="text-[200px] font-bold">LIFEMAXXING</h1>
          <span>
            <em>~ Aakash Choudhary</em>
          </span>
        </div>
      </div>
    </>
  );
}
