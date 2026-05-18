import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),

  title: {
    default: "Station QR",
    template: "%s | Station QR",
  },

  description:
    "Find railway station QR codes, station details, and travel information across India.",

  openGraph: {
    title: "Station QR",
    description:
      "Find railway station QR codes across India.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        {children}
      </body>
    </html>
  );
}