import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json([]);
  }

  const stations = await prisma.station.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
    take: 8,
  });

  return NextResponse.json(stations);
}