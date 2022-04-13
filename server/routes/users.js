import express from "express";

// controllers routes
import {signin, signup} from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;
