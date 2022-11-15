import express from "express";
import routes from "./route";

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
