import { Request, Response, NextFunction } from "express";
import studentService from "../services/student.service";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const students = await studentService.findAll();
    console.log("students", students);
    res.status(200).json({
      message: "Thành Công",
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const student = await studentService.findById(id);

    res.status(200).json({
      message: "Thành Công",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const student = await studentService.createRecord(req.body);

    res.status(201).json({
      message: "Thành Công",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  findAll,
  findById,
  createRecord,
};