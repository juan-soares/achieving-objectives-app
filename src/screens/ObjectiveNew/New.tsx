import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createObjective from "../../services/objective/create";
import { Header } from "../../shared/components/Header";
import { Sidebar } from "../../shared/components/Sidebar";
import { IObjective } from "../../shared/interfaces";
import messages from "../../shared/messages";

export function ScreenObjectiveNew() {
  const [form, setForm] = useState<IObjective>({
    title: "",
    goal: 0.0,
    description: "",
    incomes: [],
    user: localStorage.getItem("nickname"),
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const confirm = window.confirm("Deseja realmente salvar?");
    if (!confirm) return;

    setIsLoading(true);

    const id = await createObjective(form);

    if (!id) {
      window.alert(messages.create.failure);
      setIsLoading(false);
      return;
    }
    window.alert(messages.create.sucess);
    navigate(`/objective/${id}`);
  };

  return (
    <div>
      <Header />
      <Sidebar />

      <h2>Adicionar Meta</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <label htmlFor="goal">Meta R$ </label>
        <input
          type="number"
          id="goal"
          required
          min="0"
          value={form.goal}
          onChange={(e) =>
            setForm({
              ...form,
              goal: e.target.value === "" ? 0 : parseFloat(e.target.value),
            })
          }
        />

        <label htmlFor="description">Descrição</label>
        <textarea
          required
          id="description"
          placeholder="Deixe aqui uma breve descrição desta meta."
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>

        <button disabled={isLoading}>Salvar</button>
      </form>
    </div>
  );
}
