var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//@ts-ignore
import squelize from "./schema.js"; //@ts-ignore
import path from "path"; //@ts-ignore
import fs from "fs";
import root from "./utils.js";
const Tables = [
    "Users",
    "Products",
    "Sales",
    "Purchases",
    "Expenses",
    "ExpenseSummary",
    "ExpenseByCategory",
    "PurchaseSummary",
    "SalesSummary"
];
function cleardb() {
    return __awaiter(this, void 0, void 0, function* () {
        for (const table of Tables) {
            const model = squelize.models[table];
            if (model) {
                try {
                    yield model.destroy({ where: {}, truncate: true });
                }
                catch (error) {
                    console.error(`Error in ${table}:`, error.message);
                }
            }
            else
                console.warn(`Model ${table} does not exist in Sequelize.`);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Synchronizing database schema...");
            yield squelize.sync({ force: true });
            console.log("Database synchronized successfully.");
            yield cleardb();
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
                    yield model.bulkCreate(jsonData);
                    console.log(`Seeded ${name} with data from ${name}`);
                }
                catch (error) {
                    console.error(`Error seeding ${name}:`, error.message);
                }
            }
        }
        catch (error) {
            console.error("An error occurred during the database setup:", error.message);
        }
        finally {
            yield squelize.close();
            console.log("Sequelize connection closed.");
        }
    });
}
main();
