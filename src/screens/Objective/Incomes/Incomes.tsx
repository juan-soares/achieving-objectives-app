import { useState } from "react";
import { IObjective } from "../../../shared/interfaces";
import { IIncome } from "../../../shared/interfaces/income.interface";
import { IncomesForm } from "./Form";
import { IncomesList } from "./List";

interface IProps {
  objective: IObjective;
}

export function Incomes({ objective }: IProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [incomesList, setIncomesList] = useState<IIncome[]>(objective.incomes);

  return (
    <>
      <button onClick={() => setShowForm(true)}>Adicionar Rendimento</button>
      {showForm ? (
        <IncomesForm
          setShowForm={setShowForm}
          objective={objective}
          setIncomesList={setIncomesList}
        />
      ) : (
        <IncomesList />
      )}
    </>
  );
}
