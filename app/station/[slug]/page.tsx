import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

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

      <div className="border rounded-3xl p-8">

        <h1 className="text-4xl font-bold">
          {station.name}
        </h1>

        <p className="mt-3 text-gray-500">
          {station.state}
        </p>

        <div className="mt-10">

          <h2 className="text-2xl font-semibold">
            Station QR Code
          </h2>

          <div className="mt-4 h-56 rounded-2xl border flex items-center justify-center">

            QR Coming Soon

          </div>

        </div>

      </div>

    </main>
  );
}