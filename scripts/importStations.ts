import fs from "fs";
import csv from "csv-parser";
import { prisma } from "../lib/prisma";

const rows: any[] = [];

fs.createReadStream("data/stations.csv")
  .pipe(csv())
  .on("data", (data) => rows.push(data))
  .on("end", async () => {
    for (const row of rows) {
      await prisma.station.create({
        data: {
          name: row.name,
          slug: row.slug,
          state: row.state,
        },
      });
    }

    console.log("Stations imported successfully");

    await prisma.$disconnect();
  });