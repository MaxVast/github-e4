import express from "express"

import {homeController} from "../../controllers/Home/Home";

const router = express.Router()

// router.get("/getAll", homeController.getAll);
router.get("/health", homeController.health);

export default router;

