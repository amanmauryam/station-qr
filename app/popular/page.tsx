import Link from "next/link";

const popularStations = [
  "new-delhi",
  "mumbai-central",
  "patna-junction",
  "varanasi-junction",
];

export default function PopularPage() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold">
        Popular Railway Stations
      </h1>

      <div className="mt-6 space-y-4">
        {popularStations.map((station) => (
          <Link
            key={station}
            href={`/station/${station}`}
            className="block underline"
          >
            {station.replace(/-/g, " ")}
          </Link>
        ))}
      </div>
    </main>
  );
}