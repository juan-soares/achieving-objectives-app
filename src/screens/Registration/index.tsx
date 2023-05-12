import { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import createUser from "../../services/user/create";
import messages from "../../shared/messages";
import handleChange from "../../shared/hooks/handleChange";

interface IUserForm {
  [key: string]: string;
  nickname: string;
  email: string;
  password: string;
}

interface IUserFormInputs {
  type: string;
  label: string;
  id: string;
}

export default function ScreenRegistration() {
  const [form, setForm] = useState<IUserForm>({
    nickname: "",
    email: "",
    password: "",
  });

  const inputsFields: IUserFormInputs[] = [
    {
      type: "text",
      label: "Nickname",
      id: "nickname",
    },
    {
      type: "email",
      label: "E-mail",
      id: "email",
    },
    {
      type: "password",
      label: "Senha",
      id: "password",
    },
  ];

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const confirm = window.confirm("Deseja realmente salvar?");
    if (!confirm) return;

    const { resStatus, nickname } = await createUser(form);

    if (resStatus !== 201) {
      window.alert(messages.create.failure);
      return;
    }

    localStorage.setItem("nickname", nickname);

    window.alert(messages.create.sucess);

    setForm({
      nickname: "",
      email: "",
      password: "",
    });
    localStorage.setItem("nickname", nickname);

    navigate("/");
  }

  return (
    <div>
      <h2>Registre-se</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        {inputsFields.map(({ type, label, id }) => (
          <Fragment key={id}>
            <label>{label}</label>
            <input
              type={type}
              id={id}
              required
              value={form[id]}
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Fragment>
        ))}
        {form.password !== "" && form.password.length < 6 && (
          <span>A senha deve conter no mínimo 6 caracteres.</span>
        )}
        <button
          disabled={
            form.nickname === "" ||
            form.email === "" ||
            form.password.length < 6
          }
        >
          Confirmar
        </button>
      </form>
      <Link to="/">Voltar</Link>
    </div>
  );
}
