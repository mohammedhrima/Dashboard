import { Sequelize, DataTypes } from "sequelize";
import path from "path"
import root from "./utils.js";

const squelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(root, "./database/dev.db")
})

export const Users = squelize.define("Users",
  {
    userId: { type: DataTypes.STRING, primaryKey: true /*unique*/ },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
  }
  ,
  { tableName: "Users", timestamps: false })

export const Products = squelize.define("Products",
  {
    productId: { type: DataTypes.STRING, primaryKey: true /*unique*/ },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    rating: { type: DataTypes.FLOAT, allowNull: true },
    stockQuantity: { type: DataTypes.INTEGER }
  },
  { tableName: "Products", timestamps: false })

export const Sales = squelize.define("Sales",
  {
    saleId: { type: DataTypes.STRING, primaryKey: true },
    productId: { type: DataTypes.STRING },
    timestamp: { type: DataTypes.DATE },
    quantity: { type: DataTypes.INTEGER },
    unitPrice: { type: DataTypes.FLOAT },
    totalAmount: { type: DataTypes.FLOAT }
  },
  { tableName: "Sales", timestamps: false })

export const Purchases = squelize.define("Purchases",
  {
    purchaseId: { type: DataTypes.STRING, primaryKey: true },
    productId: { type: DataTypes.STRING },
    timestamp: { type: DataTypes.DATE },
    quantity: { type: DataTypes.INTEGER },
    unitCost: { type: DataTypes.FLOAT },
    totalCost: { type: DataTypes.FLOAT }
  },
  { tableName: "Purchases", timestamps: false })

export const Expenses = squelize.define("Expenses",
  {
    expenseId: { type: DataTypes.STRING, primaryKey: true },
    category: { type: DataTypes.STRING },
    amount: { type: DataTypes.FLOAT },
    timestamp: { type: DataTypes.DATE }
  },
  { tableName: "Expenses", timestamps: false })

export const SalesSummary = squelize.define("SalesSummary",
  {
    salesSumaryId: { type: DataTypes.STRING, primaryKey: true },
    totalValue: { type: DataTypes.FLOAT },
    changePercentage: { type: DataTypes.FLOAT },
    date: { type: DataTypes.DATE }
  },
  { tableName: "SalesSummary", timestamps: false })

export const PurchaseSummary = squelize.define("PurchaseSummary",
  {
    purchaseSummaryId: { type: DataTypes.STRING, primaryKey: true },
    totalPurchase: { type: DataTypes.FLOAT },
    changePercentage: { type: DataTypes.FLOAT },
    date: { type: DataTypes.DATE }
  },
  { tableName: "PurchaseSummary", timestamps: false })

export const ExpenseSummary = squelize.define("ExpenseSummary",
  {
    expenseSummaryId: { type: DataTypes.STRING, primaryKey: true },
    totalExpenses: { type: DataTypes.FLOAT },
    date: { type: DataTypes.DATE }
  }
  ,
  { tableName: "ExpenseSummary", timestamps: false })

export const ExpenseByCategory = squelize.define("ExpenseByCategory",
  {
    expenseByCategoryId: { type: DataTypes.STRING, primaryKey: true },
    expenseSummaryId: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    amount: { type: DataTypes.BIGINT },
    date: { type: DataTypes.DATE },
  },
  { tableName: "ExpenseByCategory", timestamps: true })

Products.hasMany(Sales, { foreignKey: "productId", onDelete: "CASCADE" })
Sales.belongsTo(Products, { foreignKey: "productId", onDelete: "CASCADE" })

Products.hasMany(Purchases, { foreignKey: "productId", onDelete: "CASCADE" })
Purchases.belongsTo(Products, { foreignKey: "productId", onDelete: "CASCADE" })

ExpenseSummary.hasMany(ExpenseByCategory, { foreignKey: "expenseSummaryId", onDelete: "CASCADE" })
ExpenseByCategory.belongsTo(ExpenseSummary, { foreignKey: "expenseSummaryId", onDelete: "CASCADE" })


export default squelize

