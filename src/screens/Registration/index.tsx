import { useState, Fragment } from "react";
import { Link } from "react-router-dom";

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const confirm = window.confirm("Deseja realmente salvar?");
    if (!confirm) return;
    window.alert(
      "Ops! Parece que algo deu errado. Por favor, tente novamente."
    );
    window.alert("Salvo com sucesso!");
    setForm({
      nickname: "",
      email: "",
      password: "",
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {inputsFields.map(({ type, label, id }) => (
          <Fragment key={id}>
            <label>{label}</label>
            <input
              type={type}
              id={id}
              required
              value={form[id]}
              onChange={(e) => handleChange(e)}
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
