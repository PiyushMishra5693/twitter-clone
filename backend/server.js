import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

app.get("/",(req,res)=>{
    res.send("Server is ready");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sever running on port ${PORT}`);
    connectDB();
})