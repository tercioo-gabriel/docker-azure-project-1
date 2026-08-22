import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const navigate = useNavigate();

async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();


setError("");

try {
  const response = await fetch("https://silog-backend.wittystone-b25df558.westus2.azurecontainerapps.io/auth/login",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    setError(data.message);
    return;
  }

  navigate("/home");
} catch (error) {
  console.error(error);
  setError("Não foi possível conectar ao servidor.");
}


}

return ( <main className="login-page"> <div className="login-container"> <h1>Login</h1>

    <p className="login-subtitle">
      Entre na sua conta
    </p>

    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>

        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>

        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <button type="submit">
        Entrar
      </button>
    </form>
  </div>
</main>
);
}

export default Login;
