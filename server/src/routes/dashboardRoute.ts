import { Router } from "express";
import { ExpenseByCategory, ExpenseSummary, Products, PurchaseSummary, Sales, SalesSummary } from "../schema.js";

const router = Router();
router.get("/", async (req, res) => {
  try {
    const _products = await Products.findAll({
      limit: 15,
      order: [["stockQuantity", "DESC"]],
    });

    const _salesSummary = await SalesSummary.findAll({
      limit: 5,
      order: [["date", "DESC"]],
    });

    const _purchaseSummary = await PurchaseSummary.findAll({
      limit: 5,
      order: [["date", "DESC"]]
    })

    const _expenseSummary = await ExpenseSummary.findAll({
      limit: 5,
      order: [["date", "DESC"]]
    })

    const _expenseByCategory = await ExpenseByCategory.findAll({
      limit: 5,
      order: [["date", "DESC"]]
    })

    const expenseByCategorySummary = _expenseByCategory.map((item: any) => ({
      ...item.get(),
      amount: item.amount.toString(),
    }));

    const products = _products.map((item: any) => item.get());
    const salesSummary = _salesSummary.map((item: any) => item.get());
    const purchaseSummary = _purchaseSummary.map((item: any) => item.get());
    const expenseSummary = _expenseSummary.map((item: any) => item.get());

    res.json({
      products,
      salesSummary,
      purchaseSummary,
      expenseSummary,
      expenseByCategorySummary,
    });
  } catch (error) { }
});

export default router;
