var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import { ExpenseByCategory, ExpenseSummary, Products, PurchaseSummary, SalesSummary } from "../schema.js";
const router = Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _products = yield Products.findAll({
            limit: 15,
            order: [["stockQuantity", "DESC"]],
        });
        const _salesSummary = yield SalesSummary.findAll({
            limit: 5,
            order: [["date", "DESC"]],
        });
        const _purchaseSummary = yield PurchaseSummary.findAll({
            limit: 5,
            order: [["date", "DESC"]]
        });
        const _expenseSummary = yield ExpenseSummary.findAll({
            limit: 5,
            order: [["date", "DESC"]]
        });
        const _expenseByCategory = yield ExpenseByCategory.findAll({
            limit: 5,
            order: [["date", "DESC"]]
        });
        const expenseByCategorySummary = _expenseByCategory.map((item) => (Object.assign(Object.assign({}, item.get()), { amount: item.amount.toString() })));
        const products = _products.map((item) => item.get());
        const salesSummary = _salesSummary.map((item) => item.get());
        const purchaseSummary = _purchaseSummary.map((item) => item.get());
        const expenseSummary = _expenseSummary.map((item) => item.get());
        res.json({
            products,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategorySummary,
        });
    }
    catch (error) { }
}));
export default router;
