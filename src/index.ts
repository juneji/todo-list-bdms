import express from "express";
import { router } from "./routes";
import { setupSwagger } from "./swagger";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", router);

setupSwagger(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
