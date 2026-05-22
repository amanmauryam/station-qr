"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Station {
  id: string;
  name: string;
  slug: string;
  state: string;
}

export default function SearchBox() {

  const [query, setQuery] = useState("");
  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {

    async function fetchStations() {

      if (!query.trim()) {
        setStations([]);
        return;
      }

      const res = await fetch(
        `/api/search?query=${query}`
      );

      const data = await res.json();

      setStations(data);
    }

    fetchStations();

  }, [query]);

  return (
    <div className="mx-auto mt-6 max-w-xl px-4">

      <input
        type="text"
        placeholder="Search railway station..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-black"
      />

      {query && (
        <div className="mt-3 overflow-hidden rounded-2xl border bg-white shadow-lg">

          {stations.length > 0 ? (

            stations.map((station) => (

              <Link
                key={station.id}
                href={`/station/${station.slug}`}
                className="block border-b p-4 hover:bg-gray-50"
              >

                <h2 className="font-semibold">
                  {station.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {station.state}
                </p>

              </Link>

            ))

          ) : (

            <div className="p-4 text-gray-500">
              No stations found
            </div>

          )}

        </div>
      )}

    </div>
  );
}