import SearchBar from "@/components/SearchBar";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center py-20">

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
      <div className="mt-20 grid gap-4 md:grid-cols-3 w-full max-w-5xl">

  <div className="border rounded-2xl p-6">
    <h2 className="font-bold text-xl">
      Fast Search
    </h2>

    <p className="text-gray-500 mt-2">
      Instantly find railway station pages.
    </p>
  </div>

  <div className="border rounded-2xl p-6">
    <h2 className="font-bold text-xl">
      QR Information
    </h2>

    <p className="text-gray-500 mt-2">
      Access station QR details easily.
    </p>
  </div>

  <div className="border rounded-2xl p-6">
    <h2 className="font-bold text-xl">
      SEO Optimized
    </h2>

    <p className="text-gray-500 mt-2">
      Fast and searchable railway data.
    </p>
  </div>

</div>

    </main>
  );
}