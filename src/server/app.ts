import express from "express";
import cors from "cors";
import morgan from "morgan";
import corsOptions from "./corsOptions.js";
import { filterData } from "./controllers/filterController.js";

const app = express();

app.use(cors(corsOptions));
app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Pong",
  });
});

app.get("/filter", filterData);

export default app;
