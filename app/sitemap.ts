import { prisma } from "@/lib/prisma";

export default async function sitemap() {
  const stations = await prisma.station.findMany();

  const stationUrls = stations.map(
    (station: { slug: string }) => ({
      url: `https://example.com/station/${station.slug}`,
      lastModified: new Date(),
    })
  );

  return [
    {
      url: "https://example.com",
      lastModified: new Date(),
    },

    ...stationUrls,
  ];
}