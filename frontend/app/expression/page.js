"use client";

import Navbar from "@/components/ui/navbar";
import React from "react";
import Link from "next/link";

export default function Expression() {
  return (
    <>
      <Navbar />
      <div className="relative flex top-30 justify-center">
        <div className="flex flex-wrap gap-[5px] h-max w-[70vw] justify-center justify-items-center">
          <Link href="/cinema">
            <div className="cursor-pointer flex items-center justify-center h-[300px] w-[350px] border-2 border-border text-[20px] font-bold">
              CINEMA
            </div>
          </Link>
          <Link href="/music">
            <div className="cursor-pointer flex items-center justify-center h-[300px] w-[350px] border-2 border-border text-[20px] font-bold">
              MUSIC
            </div>
          </Link> 
        </div>
      </div>
    </>
  );
}
