import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv"
import path from "path";
import { fileURLToPath } from 'url';
import authRoute from "./routes/auth.routes.js"
import userRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sever running on port ${PORT}`);
    connectDB();
})