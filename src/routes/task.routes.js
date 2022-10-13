import { Router } from "express";
import {
  createTasks,
  deleteTasks,
  getTask,
  getTaskCounter,
  getTasks,
  updateTasks,
} from "../controllers/task.controller";

const router = Router();


// Docs de Swagger
/**
 * @swagger
 * 
 */
router.get("/", (req, res) => {
  res.send("Hola Mundo")
})
router.get("/tasks", getTasks);
router.get("/tasks/count", getTaskCounter);
router.get("/tasks/:id", getTask);

router.post("/tasks", createTasks);

router.delete("/tasks/:id", deleteTasks);

router.put("/tasks/:id", updateTasks);

export default router;
