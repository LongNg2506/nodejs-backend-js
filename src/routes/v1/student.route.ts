import express from "express";
import studentController from "../../controllers/student.controller";
const router = express.Router();

router.get("", studentController.findAll);

router.get("/:id", studentController.findById);

router.post("", studentController.createRecord);

export default router;