import { useState } from "react";
import { IObjective } from "../../../shared/interfaces";
import { IIncome } from "../../../shared/interfaces/income.interface";
import { IncomesForm } from "./Form";
import { IncomesList } from "./List";

interface IProps {
  objective: IObjective;
  setNetAmount: React.Dispatch<React.SetStateAction<number>>;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Incomes({
  objective,
  setNetAmount,
  showForm,
  setShowForm,
}: IProps) {
  const [incomesList, setIncomesList] = useState<IIncome[]>(objective.incomes);

  if (showForm) {
    return (
      <IncomesForm
        setShowForm={setShowForm}
        objective={objective}
        setIncomesList={setIncomesList}
      />
    );
  } else {
    return (
      <IncomesList incomesList={incomesList} setNetAmount={setNetAmount} />
    );
  }
}
