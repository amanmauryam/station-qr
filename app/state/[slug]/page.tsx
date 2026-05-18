import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StatePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const stateName = slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  const stations = await prisma.station.findMany({
    where: {
      state: stateName,
    },
  });

  if (stations.length === 0) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">
        {stateName} Railway Stations
      </h1>

      <div className="mt-6 space-y-3">
        {stations.map((station) => (
          <Link
            key={station.id}
            href={`/station/${station.slug}`}
            className="block underline"
          >
            {station.name}
          </Link>
        ))}
      </div>
    </main>
  );
}