import { Sequelize, DataTypes } from "sequelize";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Initialize Sequelize
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, "../prisma/dev.db"),  // SQLite path
});

// Define Models based on your schema
const Users = sequelize.define('Users', {
    userId: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
}, { tableName: 'Users', timestamps: false });

const Products = sequelize.define('Products', {
    productId: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    stockQuantity: {
        type: DataTypes.INTEGER,
    }
}, { tableName: 'Products', timestamps: false });

// Define other models similarly...

// Function to delay between operations
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to delete all data
async function deleteAllData() {
    const tablesInOrder = [
        'ExpenseByCategory',
        'Sales',
        'Purchases',
        'ExpenseSummary',
        'SalesSummary',
        'PurchaseSummary',
        'Expenses',
        'Products',
        'Users',
    ];

    for (const tableName of tablesInOrder) {
        const model = sequelize.models[tableName];
        if (model) {
            try {
                console.log(`Attempting to delete all records from ${tableName}`);
                await model.destroy({ where: {} });  // Deleting all records from table
                console.log(`Successfully deleted all records from ${tableName}`);
            } catch (error) {
                console.error(`Failed to delete records from ${tableName}:`, error.message);
            }
        } else {
            console.warn(`Model ${tableName} does not exist in Sequelize`);
        }
    }
}

// Main function to seed data
async function main() {
    const dataDirectory = path.join(__dirname, "seedData");

    const orderedFileNames = [
        "users.json", "products.json", "sales.json", "purchases.json",
        "expenses.json", "expenseByCategory.json", "expenseSummary.json",
        "salesSummary.json", "purchaseSummary.json"
    ];

    await deleteAllData();  // Delete all previous data

    for (const fileName of orderedFileNames) {
        const filePath = path.join(dataDirectory, fileName);
        const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const modelName = path.basename(fileName, path.extname(fileName));
        const model = sequelize.models[modelName];

        if (!model) {
            console.error(`No Sequelize model matches the file name: ${fileName}`);
            continue;
        }

        try {
            // Insert data into corresponding table using Sequelize's bulkCreate method
            await model.bulkCreate(jsonData);
            console.log(`Seeded ${modelName} with data from ${fileName}`);
            await delay(100);
        } catch (error) {
            console.error(`Error seeding ${modelName}: ${error.message}`);
        }
    }
}

// Initialize and run the seeding
main().catch(e => {
    console.error(e);
}).finally(async () => {
    await sequelize.close();
});