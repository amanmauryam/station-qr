import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="mt-4 text-gray-600">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-6 bg-black text-white px-5 py-3 rounded-xl"
      >
        Go Home
      </Link>

    </main>
  );
}