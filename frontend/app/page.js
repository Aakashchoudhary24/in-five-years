"use client";

import Navbar from "@/components/ui/navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative flex top-45 justify-center py-3">
        <div className="w-[90vw] overflow-hidden z-10 text-center">
          <h1 className="text-[220px] font-bold wrap-break-word leading-tight">
            LIFEMAXXING
          </h1>
          <span>
            <em>~ Aakash Choudhary</em>
          </span>
        </div>
      </div>
    </>
  );
}
