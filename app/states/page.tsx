import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function StatesPage() {

  const stations = await prisma.station.findMany();

  const states = [
    ...new Set(stations.map((s) => s.state)),
  ];

  return (
    <main className="p-6">

      <h1 className="text-4xl font-bold">
        Indian Railway States
      </h1>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        {states.map((state) => {

          const slug = state
            .toLowerCase()
            .replace(/\s+/g, "-");

          return (
            <Link
              key={state}
              href={`/state/${slug}`}
              className="border rounded-2xl p-5 hover:shadow-lg transition"
            >
              {state}
            </Link>
          );
        })}

      </div>

    </main>
  );
}