import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// SEO Metadata
export async function generateMetadata({
  params,
}: PageProps) {
  const { slug } = await params;

  const station = await prisma.station.findUnique({
    where: {
      slug,
    },
  });

  if (!station) {
    return {
      title: "Station Not Found | Station QR",
    };
  }

  return {
    title: `${station.name} Station QR Code | Station QR`,
    description: `Find ${station.name} railway station QR code, station details, and travel information.`,
  };
}

// Page UI
export default async function StationPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const station = await prisma.station.findUnique({
    where: {
      slug,
    },
  });

  if (!station) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold">
        {station.name}
      </h1>

      <p className="mt-4 text-gray-600">
        State: {station.state}
      </p>
    </main>
  );
}