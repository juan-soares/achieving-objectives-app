import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IForm } from "./interfaces";
import createObjective from "../../../services/objective/create";
import handleChange from "../../../shared/hooks/handleChange";
import messages from "../../../shared/messages";

export function ScreenObjectiveNew() {
  const navigate = useNavigate();
  const [form, setForm] = useState<IForm>({
    title: "",
    goal: 0,
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const confirm = window.confirm("Deseja realmente salvar?");
    if (!confirm) return;
    const id = await createObjective(form);

    if (!id) {
      window.alert(messages.create.failure);
      return;
    }

    window.alert(messages.create.sucess);

    navigate(`/objective/${id}`);
  };

  return (
    <div>
      <h2>Adicionar Objetivo</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          required
          id="title"
          value={form.title}
          onChange={(e) => handleChange(e, form, setForm)}
        />

        <label htmlFor="goal">Meta R$</label>
        <input
          type="number"
          required
          id="goal"
          value={form.goal}
          onChange={(e) => {
            setForm({
              ...form,
              goal: e.target.value === "" ? 0 : parseFloat(e.target.value),
            });
          }}
        />

        <label htmlFor="description">Descrição</label>
        <textarea
          required
          id="description"
          value={form.description}
          onChange={(e) => handleChange(e, form, setForm)}
        ></textarea>

        <button>Salvar</button>
      </form>
    </div>
  );
}
