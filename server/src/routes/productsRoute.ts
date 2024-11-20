import { Router } from "express";
import { Products } from "../schema.js";
import { Sequelize } from "sequelize";

const router = Router()

router.get("/", async (req, res) => {
  try {
    const search = req.query.search?.toString();


    const products = await Products.findAll({
      where: search ? {
        name: {
          //@ts-ignore
          [Sequelize.Op.like]: `%${search}%`,
        },
      } : {},
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error getting products" })
  }
})

router.post("/", async (req, res) => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await Products.create({ productId, name, price, rating, stockQuantity })
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: "Error posting to products" })
  }
})

export default router