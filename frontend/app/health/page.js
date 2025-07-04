"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/navbar";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export default function Fitness() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [logs, setLogs] = useState({
    [new Date().toDateString()]: "Push day: Bench 3x10, OHP 3x8",
  });
  const [workoutPlan, setWorkoutPlan] = useState([
    "Bench Press",
    "OHP",
    "Lateral Raises",
  ]);

  const handleDone = () => {
    if (workoutPlan.length === 0) return;
    const [, ...remaining] = workoutPlan;
    setWorkoutPlan(remaining);
  };

  const handleAddExercise = () => {
    const ex = prompt("Enter new exercise:");
    if (ex) setWorkoutPlan([...workoutPlan, ex]);
  };

  return (
    <>
      <Navbar />
      <div className="p-10 space-y-10">
        {/* Logs and Calendar */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">📅 Select Date</h2>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="border"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">📝 Log for {selectedDate.toDateString()}</h2>
            <div className="border p-4 min-h-[150px]">
              {logs[selectedDate.toDateString()] || <em>No log for this date.</em>}
            </div>
          </div>
        </section>

        {/* Recent Logs */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📋 Recent Logs</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Log</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(logs).map(([date, log]) => (
                <TableRow key={date}>
                  <TableCell>{date}</TableCell>
                  <TableCell>{log}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Workout Plan */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">💪 Today’s Workout Plan</h2>
          <ul className="list-decimal list-inside space-y-2 mb-4">
            {workoutPlan.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
          <div className="flex space-x-2">
            <Button onClick={handleDone}>Mark First as Done</Button>
            <Button onClick={handleAddExercise}>Add Exercise</Button>
          </div>
        </section>
      </div>
    </>
  );
}
