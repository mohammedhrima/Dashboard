//@ts-ignore
import squelize, { __dirname } from "./schema.js";
import path from "path";
import fs from "fs";
import root from "./utils.js";

const Tables = [
"Users",
  "Products", // Products must be seeded before tables referencing it
  "Sales",
  "Purchases",
  "Expenses",
  "ExpenseSummary",
  "ExpenseByCategory",
];

async function cleardb() {
  for (const table of Tables) {
    const model = squelize.models[table];
    if (model) {
      try {
        await model.destroy({ where: {}, truncate: true });
      } catch (error: any) {
        console.error(`Error in ${table}:`, error.message);
      }
    } else console.warn(`Model ${table} does not exist in Sequelize.`);
  }
}

async function main() {
  try {
    console.log("Synchronizing database schema...");
    await squelize.sync({ force: true });
    console.log("Database synchronized successfully.");

    await cleardb();

    const dataDirectory = path.join(root, "./database/jsons");
    for (const name of Tables) {
      const filePath = path.join(dataDirectory, name.toLowerCase() + ".json");
      const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      const model = squelize.models[name];

      if (!model) {
        console.error(`No Sequelize model matches the file name: ${name}`);
        continue;
      }

      try {
        await model.bulkCreate(jsonData);
        console.log(`Seeded ${name} with data from ${name}`);
      } catch (error: any) {
        console.error(`Error seeding ${name}:`, error.message);
      }
    }

  } catch (error: any) {
    console.error("An error occurred during the database setup:", error.message);
  } finally {
    await squelize.close();
    console.log("Sequelize connection closed.");
  }
}

main();
