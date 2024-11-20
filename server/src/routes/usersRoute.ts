import { Router } from "express";
import { Users } from "../schema.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = Users.findAll();
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: "Error gettinh users" });
  }
})

export default router