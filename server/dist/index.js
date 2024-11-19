import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
// Import sqlite3 as a default import and then destructure verbose
import sqlite3 from "sqlite3";
const { verbose } = sqlite3; // Destructure 'verbose' from sqlite3
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// CONFIGURATIONS
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
// Middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Open SQLite Database
const db = new sqlite3.Database(path.join(__dirname, "../prisma/dev.db"), sqlite3.OPEN_READWRITE);
// Routes
app.get('/log-data', (req, res) => {
    // Sample SQL query (replace with your own query)
    const sql = 'SELECT * FROM Sales'; // Change 'your_table_name' to your actual table name
    // Execute the query and log the results
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            return res.status(500).json({ error: 'Error querying the database.' });
        }
        // Log the data to the console
        console.log('Data from the database:', rows);
        // Send the data as the response
        res.json(rows);
    });
});
// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
