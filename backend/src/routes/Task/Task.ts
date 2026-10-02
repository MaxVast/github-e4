import express from "express"

import { taskController } from "../../controllers/Task/Task";

const router = express.Router()

router.get("/getAll", taskController.getAll);


export default router;

