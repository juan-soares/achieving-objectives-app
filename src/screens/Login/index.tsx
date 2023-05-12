import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import readUser from "../../services/user/read";
import handleChange from "../../shared/hooks/handleChange";
import messages from "../../shared/messages";

export default function ScreenLogin() {
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
    } else {
      window.alert(`Olá, ${nickname}.`);
      navigate("/");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Usuário</label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => handleChange(e, form, setForm)}
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          required
          value={form.password}
          onChange={(e) => handleChange(e, form, setForm)}
        />
        <button>Entrar</button>
      </form>
      <p>
        Ainda não tem uma conta? <Link to="/registration">Registre-se</Link>
      </p>
    </div>
  );
}
