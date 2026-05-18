import fs from "fs";
import csv from "csv-parser";

const results: any[] = [];

fs.createReadStream("data/stations.csv")
  .pipe(csv())
  .on("data", (data) => {
    console.log("Row:", data);
    results.push(data);
  })
  .on("end", () => {
    console.log("Final:", results);
  });