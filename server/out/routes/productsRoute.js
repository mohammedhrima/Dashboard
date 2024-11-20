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
import { Products } from "../schema.js";
import { Sequelize } from "sequelize";
const router = Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString();
        const products = yield Products.findAll({
            where: search ? {
                name: {
                    //@ts-ignore
                    [Sequelize.Op.like]: `%${search}%`,
                },
            } : {},
        });
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error getting products" });
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, name, price, rating, stockQuantity } = req.body;
        const product = yield Products.create({ productId, name, price, rating, stockQuantity });
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error posting to products" });
    }
}));
export default router;
