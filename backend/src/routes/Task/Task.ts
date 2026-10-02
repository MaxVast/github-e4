import express from "express"

import { taskController } from "../../controllers/Task/Task";

const router = express.Router()

router.get("/getAll", taskController.getAll);
router.get("/getOne/:taskId", taskController.getOne);
router.get("/getUsertask/:userId", taskController.getUsertask);
router.delete("/deleteOne/:taskId", taskController.deleteOne);
router.put("/updateOne/:taskId", taskController.updateOne);
router.post("/createOne", taskController.createOne);

export default router;