"use client";

import Navbar from "@/components/ui/navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
        <div className="relative flex-col text-center top-45 justify-self-center w-[90vw]">
          <h1 className="text-[220px] font-bold wrap-break-word leading-tight">
            LIFEMAXXING
          </h1>
          <span>
            <em>~ Aakash Choudhary</em>
          </span>
        </div>
    </>
  );
}