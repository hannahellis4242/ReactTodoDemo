import express from "express";
import todoRouter from "./routes/TodoRoutes";

const port = 5000;
const host = "0.0.0.0";

const app = express();
app.use(express.json());

app.use("/todo", todoRouter);

app.listen(port, host, () => {
  console.log(`listening at http://${host}:${port}`);
});
