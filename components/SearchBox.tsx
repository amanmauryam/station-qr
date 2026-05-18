"use client";

import { useState } from "react";
import Link from "next/link";
import { stations } from "@/data/stations";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto mt-6 max-w-xl px-4">
      <input
        type="text"
        placeholder="Search station..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg border p-3"
      />

      {query && (
        <div className="mt-3 rounded-lg border bg-white">
          {filteredStations.map((station) => (
            <Link
              key={station.id}
              href={`/station/${station.slug}`}
              className="block border-b p-3 hover:bg-gray-50"
            >
              {station.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}