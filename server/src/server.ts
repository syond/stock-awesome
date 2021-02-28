import express from "express";
import routes from "./routes";

const app = express();

const port = 3000;

app.use(express.json());
app.use(routes);
app.listen(port || 3000, () => `Server running on port: ${port || 3000}`);
