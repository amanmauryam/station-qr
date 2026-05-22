import SearchBar from "@/components/SearchBox";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-5xl font-bold leading-tight">
        Find Railway Station QR Codes
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl">
        Search Indian railway stations, QR codes,
        station details, and travel information instantly.
      </p>

      <div className="w-full max-w-xl">
        <SearchBar />
      </div>

      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <Link
          href="/states"
          className="border px-5 py-3 rounded-xl"
        >
          Browse States
        </Link>

        <Link
          href="/popular"
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          Popular Stations
        </Link>
      </div>

    </main>
  );
}