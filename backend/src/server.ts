import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend funcionando!",
  });
});

app.listen(3000, () => {
  console.log("Backend rodando em http://localhost:3000");
});