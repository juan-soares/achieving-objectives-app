import { useState } from "react";
import { IObjective } from "../../../shared/interfaces";
import { IncomesForm } from "./Form";
import { IncomesList } from "./List";

interface IProps {
  objective: IObjective;
  setObjective: React.Dispatch<React.SetStateAction<IObjective | undefined>>;
  setNetAmount: React.Dispatch<React.SetStateAction<number>>;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Incomes({
  objective,
  setObjective,
  setNetAmount,
  showForm,
  setShowForm,
}: IProps) {
  if (showForm) {
    return (
      <IncomesForm
        setShowForm={setShowForm}
        objective={objective}
        setObjective={setObjective}
      />
    );
  } else {
    return (
      <IncomesList
        incomesList={objective.incomes}
        setNetAmount={setNetAmount}
      />
    );
  }
}
