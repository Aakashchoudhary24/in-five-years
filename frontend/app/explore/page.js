"use client";

import Navbar from "@/components/ui/navbar";
import React from "react";
import Link from "next/link";

export default function Explore() {
  return (
    <>
      <Navbar />
      <div className="relative flex top-30 justify-center">
        <div className="flex flex-wrap gap-[5px] h-max w-[70vw] justify-center justify-items-center">
          <Link href="/projects">
            <div className="cursor-pointer flex items-center justify-center h-[300px] w-[350px] border-2 border-border text-[20px] font-bold">
              PROJECTS
            </div>
          </Link>
          <Link href="/learning">
            <div className="cursor-pointer flex items-center justify-center h-[300px] w-[350px] border-2 border-border text-[20px] font-bold">
              LEARNING
            </div>
          </Link>
          <Link href="/skills">
            <div className="cursor-pointer flex items-center justify-center h-[300px] w-[350px] border-2 border-border text-[20px] font-bold">
              SKILLS
            </div>
          </Link>
          <Link href="/fitness">
            <div className="cursor-pointer flex items-center justify-center h-[300px] w-[350px] border-2 border-border text-[20px] font-bold">
              FITNESS
            </div>
          </Link>
          <Link href="/reflection">
            <div className="cursor-pointer flex items-center justify-center h-[300px] w-[350px] border-2 border-border text-[20px] font-bold">
              REFLECTION
            </div>
          </Link>
          <Link href="/expression">
            <div className="cursor-pointer flex items-center justify-center h-[300px] w-[350px] border-2 border-border text-[20px] font-bold">
              EXPRESSION
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
