import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
const { email, password } = req.body;

console.log("Email recebido:", email);
console.log("Senha recebida:", password);

console.log("Email correto:", email === "admin@email.com");
console.log("Senha correta:", password === "123456");

if (email === "admin@email.com" && password === "123456") {
console.log("LOGIN APROVADO");

return res.status(200).json({
  message: "Login realizado com sucesso",
  user: {
    email,
  },
});

}

console.log("LOGIN NEGADO");

return res.status(401).json({
message: "E-mail ou senha inválidos",
});
});

export default router;