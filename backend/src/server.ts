import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.json({
message: "Backend funcionando!",
});
});

app.use("/auth", authRoutes);

app.listen(3000, () => {
console.log("Backend rodando em http://localhost:3000");
});