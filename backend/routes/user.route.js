import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUserProfile,followUnfollowUser,getSuggestedUser,updateUser } from "../controllers/user.controllers.js";
const router = express.Router();

router.get("/profile/:username",protectRoute,getUserProfile);
router.post("/follow/:id",protectRoute,followUnfollowUser);
router.get("/suggested",protectRoute,getSuggestedUser);
router.post("/update",protectRoute,updateUser);
export default router;