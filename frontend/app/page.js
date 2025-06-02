"use client"

import { ModeToggle } from "@/components/theme/mode-toggle";
import Navbar  from "@/components/ui/navbar";
import React from "react";

export default function Home() {
  return (
    <>
    <Navbar/>
    <ModeToggle />
    </>
  );
}
