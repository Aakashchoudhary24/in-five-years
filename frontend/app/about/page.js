"use client";

import Navbar from "@/components/ui/navbar";
import React from "react";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center top-20 max-w-[50vw] mx-auto text-center">
        <p className="text-lg leading-8 mb-4">
          This is not a portfolio.
        </p>
        <p className="text-lg leading-8 mb-4">
          This is a living system — a structured space for me to document, reflect, and improve across the different areas of my life. I’m building it to keep myself accountable and focused. Every section on this site represents a piece of the bigger puzzle I’m putting together: becoming a more capable, well-rounded, and self-aware individual.
        </p>
        <p className="text-lg leading-8 mb-4">
          I’m not just trying to be "productive" — I’m trying to gain clarity, mastery, and peace across disciplines. Whether it’s building something tangible in <strong>Projects</strong>, refining my <strong>Fitness</strong> habits, learning a new concept in <strong>Learning</strong>, developing <strong>Skills</strong>, expressing myself creatively in <strong>Expression</strong>, or simply taking time to think in <strong>Reflection</strong> — it all fits into the broader goal of becoming whole.
        </p>
        <p className="text-lg leading-8 mb-4">
          I’m sharing this process publicly, not for clout, but as a mirror — a way to stay honest with myself. It’s a minimalistic site because the goal is not aesthetic distraction but personal utility.
        </p>
        <p className="text-lg leading-8 mt-8 italic">
          Built by Aakash Choudhary — a work in progress, just like this site.
        </p>
      </div>
    </>
  );
}
