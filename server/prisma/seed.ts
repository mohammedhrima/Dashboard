import { PrismaClient } from "@prisma/client";
//@ts-ignore
import fs from "fs";
//@ts-ignore
import path from "path";
//@ts-ignore
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteAllData() {
  const tablesInOrder = [
    "ExpenseByCategory",
    "Sales",
    "Purchases",
    "ExpenseSummary",
    "SalesSummary",
    "PurchaseSummary",
    "Expenses",
    "Products",
    "Users"
  ];

  for (const tableName of tablesInOrder) {
    const model: any = prisma[tableName as keyof typeof prisma];
    if (model) {
      try {
        console.log(`Attempting to delete all records from ${tableName}`);
        await model.deleteMany();
        console.log(`Successfully deleted all records from ${tableName}`);
      } catch (error: any) {
        console.error(`Failed to delete records from ${tableName}:`, error.message);
      }
    } else {
      console.warn(`Model ${tableName} does not exist in Prisma schema`);
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  const orderedFileNames = [
    "users.json", "products.json", "sales.json", "purchases.json",
    "expenses.json", "expenseByCategory.json", "expenseSummary.json",
    "salesSummary.json", "purchaseSummary.json"
  ];

  await deleteAllData();

  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];

    if (!model) {
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    try {
      for (const data of jsonData) {
        await model.create({ data });
        await delay(100);
      }
      console.log(`Seeded ${modelName} with data from ${fileName}`);
    } catch (error: any) {
      console.error(`Error seeding ${modelName}: ${error.message}`);
    }
  }
}

main().catch(e => {
  console.error(e);
}).finally(async () => {
  await prisma.$disconnect();
});
