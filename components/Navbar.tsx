import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b">

      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.svg"
            alt="Station QR"
            width={40}
            height={40}
            className="w-auto h-10"
          />

          <span className="font-bold text-xl">
            Station QR
          </span>
        </Link>

        <div className="flex gap-5 text-sm">
          <Link href="/states">
            States
          </Link>

          <Link href="/popular">
            Popular
          </Link>
        </div>

      </nav>

    </header>
  );
}