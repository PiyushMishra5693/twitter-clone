import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv"
import path from "path";
import { fileURLToPath } from 'url';
import authRoute from "./routes/auth.routes.js"
import cookieParser from "cookie-parser";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use("/api/auth",authRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sever running on port ${PORT}`);
    connectDB();
})