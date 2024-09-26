import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 0 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{10,12}$/,
    },
    class: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Student = model("Student", studentSchema);
export default Student;