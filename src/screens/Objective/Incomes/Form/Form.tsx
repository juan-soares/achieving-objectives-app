import { useState } from "react";
import { IObjective } from "../../../../shared/interfaces";
import { IIncome } from "../../../../shared/interfaces/income.interface";
import messages from "../../../../shared/messages";

interface IProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  objective: IObjective;
  setIncomesList: React.Dispatch<React.SetStateAction<IIncome[]>>;
}

export function IncomesForm({
  setShowForm,
  objective,
  setIncomesList,
}: IProps) {
  const [form, setForm] = useState<IIncome>({
    title: "",
    profitability: 0,
    purchaseAmount: 0.0,
    purchaseDate: "",
    expirationDate: "",
    taxes: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const confirm = window.confirm("Deseja realmente salvar?");
    if (!confirm) return;

    const res = await fetch(
      `${process.env.REACT_APP_API}/objective/${objective.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...objective,
          incomes: [...objective.incomes, form],
        }),
      }
    );

    if (res.status === 200) {
      const updatedObjective = await res.json();
      const { incomes } = updatedObjective;
      setIncomesList(incomes);
      window.alert(messages.update.sucess);
      setShowForm(false);
    } else {
      window.alert(messages.update.failure);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Adicionar Investimento</h3>

      <label htmlFor="title">Título</label>
      <input
        type="text"
        id="title"
        required
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <label htmlFor="profitability">Rendimento a.a</label>
      <input
        type="number"
        id="profitability"
        min="0"
        required
        value={form.profitability}
        onChange={(e) =>
          setForm({ ...form, profitability: Number(e.target.value) })
        }
      />

      <label htmlFor="purchaseDate">Data de Compra</label>
      <input
        type="date"
        id="purchaseDate"
        required
        value={form.purchaseDate}
        onChange={(e) => setForm({ ...form, purchaseDate: e.target.value })}
      />

      <label htmlFor="purchaseDate">Valor de Compra R$ </label>
      <input
        type="number"
        id="purchaseAmount"
        required
        value={form.purchaseAmount}
        onChange={(e) =>
          setForm({ ...form, purchaseAmount: parseFloat(e.target.value) })
        }
      />

      <label htmlFor="expirationDate">Data de Vencimento</label>
      <input
        type="date"
        id="expirationDate"
        required
        value={form.expirationDate}
        onChange={(e) => setForm({ ...form, expirationDate: e.target.value })}
      />
      <label htmlFor="taxes">IR %</label>
      <input
        type="number"
        id="taxes"
        min="0"
        required
        value={form.taxes}
        onChange={(e) => setForm({ ...form, taxes: Number(e.target.value) })}
      />

      <button>Salvar</button>
    </form>
  );
}
