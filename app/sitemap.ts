import { prisma } from "@/lib/prisma";

export default async function sitemap() {
  const stations = await prisma.station.findMany();

  const stationUrls = stations.map((station: { slug: string }) => ({
    url: `https://stationqr.in/station/${station.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://stationqr.in",
      lastModified: new Date(),
    },

    ...stationUrls,
  ];
}