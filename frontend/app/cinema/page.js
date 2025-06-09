"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";

import movies from "@/data/movies.json";

export default function Cinema() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <Navbar />
      <div className="w-[60vw] flex flex-wrap gap-4 justify-self-center relative top-15 p-6">
        {movies.map((movie, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card
                onClick={() => setSelectedMovie(movie)}
                className="cursor-pointer hover:shadow-lg transition-shadow max-w-max break-words whitespace-normal rounded-sm"
              >
                <CardContent className="px-10 py-1 text-center">
                  <h2 className="text-xl">{movie.title}</h2>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent
              className="max-w-none pt-5 max-h-[70vh] overflow-auto"
              style={{
                scrollbarWidth: "none", 
                msOverflowStyle: "none", 
              }}
              onScroll={(e) => {
                e.currentTarget.style.scrollbarWidth = "none";
              }}
            >
              <style jsx>{`
                ::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {selectedMovie && selectedMovie.title === movie.title && (
                <div className="space-y-4 text-center">
                  <DialogTitle className="text-2xl font-bold">
                    {selectedMovie.title}
                  </DialogTitle>
                  <p className="text-sm text-gray-500">
                    Watched on: {selectedMovie.dow}
                  </p>
                  <p className="text-base whitespace-normal break-words">
                    {selectedMovie.review}
                  </p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
}
