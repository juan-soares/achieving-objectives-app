import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import updateObjective from "../../services/objective/update";
import readObjective from "../../services/objective/read";
import { IObjective } from "../../shared/interfaces";
import messages from "../../shared/messages";
import { Header } from "../../shared/components/Header";
import { Sidebar } from "../../shared/components/Sidebar";

export function ScreenObjectiveEdit() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<IObjective>({
    title: "",
    goal: 0.0,
    description: "",
    incomes: [],
  });

  const { objectiveId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const objective = await readObjective(Number(objectiveId));
      setForm(objective);
      setIsLoading(false);
    };
    getData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const confirm = window.confirm("Deseja realmente confirmar a alteração?");
    if (!confirm) return;

    setIsLoading(true);

    const status = await updateObjective(Number(objectiveId), form);

    if (status !== 200) {
      window.alert(messages.update.failure);
    } else {
      window.alert(messages.update.sucess);
      navigate(`/objective/${objectiveId}`);
    }
  };

  return (
    <div>
      <Header />
      <Sidebar />

      <h2>Alterar Meta</h2>

      {isLoading && <span>Carregando...</span>}

      {!isLoading && (
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
      )}
    </div>
  );
}
