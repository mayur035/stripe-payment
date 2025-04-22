import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import payRoutes from "./routes/create-payment-intent";
import payConfirm from "./routes/create-payment-confirm";

const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["POST", "GET"],
  })
);

app.use("/", payRoutes);
app.use("/", payConfirm);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
