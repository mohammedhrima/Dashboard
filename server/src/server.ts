import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import squelize from "./schema.js";
import dashboadRoutes from "./routes/dashboardRoute.js";
import expenseRoutes from "./routes/expenseRoute.js";
import productsRoutes from "./routes/productsRoute.js"
import usersRoutes from "./routes/usersRoute.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

squelize.authenticate().then(() => console.log("Database connected successfully."))
  .catch((error) => console.error("Database connection failed:", error.message));

app.use("/dashboard", dashboadRoutes)
app.use("/products", productsRoutes)
app.use("/users", usersRoutes)
app.use("/expenses", expenseRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
