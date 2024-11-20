import { Router } from "express";
import { ExpenseByCategory } from "../schema.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const expenseByCategorySummaryRaw = await ExpenseByCategory.findAll({
      order: [["date", "DESC"]]
    })
    const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item: any) => ({
      ...item.get(),
      amount: item.amount.toString(),
    }));

    res.json(expenseByCategorySummary)
  } catch (error) {
    res.status(500).json({ message: "Error getting expense by category" })
  }
})

export default router