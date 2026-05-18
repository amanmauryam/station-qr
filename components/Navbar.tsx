import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.svg"
            alt="Station QR"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />

          <span className="text-lg sm:text-xl font-bold tracking-tight">
            Station QR
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}