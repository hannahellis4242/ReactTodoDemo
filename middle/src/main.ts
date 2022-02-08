import cors from "cors";
import express from "express";
import todoRouter from "./routes/TodoRoutes";

const port = 5000;
const host = "0.0.0.0";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use("/todo", cors(corsOptions), todoRouter);

app.listen(port, host, () => {
  console.log(`listening at http://${host}:${port}`);
});
