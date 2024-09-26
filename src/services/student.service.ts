import { ObjectId } from "mongoose";
import Student from "../models/student.model";
import createError from "http-errors";

interface IStudent {
  _id: ObjectId;
  fullName: string;
  age: number;
  email: string;
  mobile: string;
  class: string;
}

const findAll = async () => {
  const students = await Student.find().select("-__v  -createdAt -updatedAt");
  console.log("students", students);
  return students;
};

const findById = async (id: string) => {
  const student = await Student.findById(id).select("-__v ");
  if (!student) {
    throw createError(400, "Student Not Found");
  }

  return student;
};

const createRecord = async (payload: IStudent) => {
  const student = await Student.create(payload);

  console.log("new student", student);

  return student;
};

export default {
  findAll,
  findById,
  createRecord,
};