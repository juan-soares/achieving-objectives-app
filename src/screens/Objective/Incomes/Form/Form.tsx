import { useState, useEffect } from "react";
import createIncome from "../../../../services/income/create";
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

  useEffect(() => {
    const timeBetweenDates =
      (Date.parse(form.expirationDate) - Date.parse(form.purchaseDate)) /
      86400000;

    if (timeBetweenDates > 720) {
      setForm({ ...form, taxes: 15 });
    } else if (timeBetweenDates < 721 && timeBetweenDates > 360) {
      setForm({ ...form, taxes: 17.5 });
    } else if (timeBetweenDates < 361 && timeBetweenDates > 180) {
      setForm({ ...form, taxes: 20 });
    } else {
      setForm({ ...form, taxes: 22.5 });
    }
  }, [form.purchaseDate, form.expirationDate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const confirm = window.confirm("Deseja realmente salvar?");
    if (!confirm) return;

    const { status, incomes } = await createIncome(objective, form);

    if (status === 200) {
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
        onChange={(e) =>
          setForm({ ...form, title: e.target.value.toUpperCase() })
        }
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
      <span>IR {form.taxes}%</span>
      <button>Salvar</button>
    </form>
  );
}
