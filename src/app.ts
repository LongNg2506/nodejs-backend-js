import express, { Express, Request, Response } from "express";
import studentRoute from "./routes/v1/student.route";
const app: Express = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/students", studentRoute);

export default app;