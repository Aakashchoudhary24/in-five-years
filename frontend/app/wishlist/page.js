"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [input, setInput] = useState("");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist-data");
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch (_) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist-data", JSON.stringify(wishlist));
  }, [wishlist]);

  function addItem() {
    const trimmed = input.trim();
    if (trimmed) {
      setWishlist([...wishlist, { text: trimmed, done: false }]);
      setInput("");
    }
  }

  function toggleDone(index) {
    const updated = [...wishlist];
    updated[index].done = !updated[index].done;
    setWishlist(updated);
    setOpenMenuIndex(null);
  }

  function removeItem(index) {
    const updated = [...wishlist];
    updated.splice(index, 1);
    setWishlist(updated);
    setOpenMenuIndex(null);
  }

  function toggleMenu(index) {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  }

  return (
    <>
      <Navbar />
      <div className="p-4 mt-6 max-w-2xl mx-auto text-black dark:text-white">
        <h1 className="text-xl font-semibold mb-4">Wishlist / Life Goals</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add something to your wishlist..."
            className="flex-1 px-3 py-2 rounded border dark:border-neutral-700 border-neutral-300 bg-white dark:bg-neutral-800"
          />
          <button
            onClick={addItem}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2 relative">
          {wishlist.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border border-neutral-300 dark:border-neutral-700 rounded px-3 py-2 relative"
            >
              <span className="w-6 text-center text-neutral-500">
                {index + 1}.
              </span>
              <span
                className={`flex-1 px-2 truncate ${
                  item.done ? "line-through opacity-60" : ""
                }`}
              >
                {item.text}
              </span>

              {/* Three-dot menu button */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu(index)}
                  className="px-2 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
                >
                  ⋯
                </button>

                {openMenuIndex === index && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded shadow z-10">
                    <button
                      onClick={() => toggleDone(index)}
                      className="w-full px-3 py-2 text-left hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    >
                      {item.done ? "Undo" : "Mark as Done"}
                    </button>
                    <button
                      onClick={() => removeItem(index)}
                      className="w-full px-3 py-2 text-left text-red-600 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
