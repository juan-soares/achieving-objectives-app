import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import readUser from "../../services/user/read";
import handleChange from "../../shared/hooks/handleChange";
import messages from "../../shared/messages";
import StyledScreenLogin from "./Login.styled";

export function ScreenLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const confirm = window.confirm("Deseja confirmar?");
    if (!confirm) return;

    const { nickname } = await readUser(form);

    if (!nickname) {
      window.alert(messages.read.failure);
      return;
    }

    window.alert(`Olá, ${nickname}.`);
    localStorage.setItem("nickname", nickname);
    navigate("/");
  }

  return (
    <StyledScreenLogin>
      <img
        src="https://cdn.create.vista.com/api/media/small/140445932/stock-photo-businesswoman-watering-concept-of-business"
        alt="banner"
      />
      <div className="form-container">
        <div>
          <h2>Login</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Usuário</label>
            <input
              id="email"
              type="email"
              required
              placeholder="E-mail"
              value={form.email}
              onChange={(e) => handleChange(e, form, setForm)}
            />

            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              required
              placeholder="******"
              value={form.password}
              onChange={(e) => handleChange(e, form, setForm)}
            />
            <button>Entrar</button>
          </form>
          <p>
            Ainda não tem uma conta? <Link to="/registration">Registre-se</Link>
          </p>
        </div>
      </div>
    </StyledScreenLogin>
  );
}
