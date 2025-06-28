"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import { format } from "date-fns";

const habits = [
  "Sugarless",
  "No Oil",
  "Rest",
  "Cardio",
  "Core",
  "Strength",
  "No-Scroll / Unplugged",
  "Code",
  "Control / Resist",
  "Study",
];

function generateDates(numDays) {
  const today = new Date();
  return Array.from({ length: numDays }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return format(d, "dd-MM-yyyy");
  });
}

export default function Tracker() {
  const numDays = 30;

  const [dates, setDates] = useState([]);
  const [data, setData] = useState([]);

  // Ensure this runs only on client to prevent hydration mismatch
  useEffect(() => {
    const generatedDates = generateDates(numDays);
    setDates(generatedDates);

    const stored = localStorage.getItem("habit-tracker-data");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setData(parsed);
        return;
      } catch (_) {}
    }

    setData(generatedDates.map(() => habits.map(() => false)));
  }, []);

  useEffect(() => {
    if (dates.length > 0 && data.length > 0) {
      localStorage.setItem("habit-tracker-data", JSON.stringify(data));
    }
  }, [data, dates]);

  function toggleCell(dayIndex, habitIndex) {
    const newData = [...data];
    newData[dayIndex][habitIndex] = !newData[dayIndex][habitIndex];
    setData(newData);
  }

  if (dates.length === 0 || data.length === 0) return null; // or a loading spinner

  return (
    <>
      <Navbar />
      <div className="p-4 mt-6 text-black dark:text-white">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-transparent">
                <th className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 uppercase font-semibold tracking-wide">
                  Date
                </th>
                {habits.map((habit) => (
                  <th
                    key={habit}
                    className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 uppercase font-semibold tracking-wide"
                  >
                    {habit}
                  </th>
                ))}
                <th className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 uppercase font-semibold tracking-wide">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {dates.map((date, dayIdx) => (
                <tr key={date}>
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1">
                    {date}
                  </td>
                  {habits.map((_, habitIdx) => (
                    <td
                      key={habitIdx}
                      className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-center cursor-pointer select-none"
                      onClick={() => toggleCell(dayIdx, habitIdx)}
                    >
                      {data[dayIdx][habitIdx] ? "✔️" : "❌"}
                    </td>
                  ))}
                  <td className="border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-center">
                    {data[dayIdx].filter(Boolean).length}/{habits.length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
