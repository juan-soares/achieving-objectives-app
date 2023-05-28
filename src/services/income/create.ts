import { IObjective } from "../../shared/interfaces";
import { IIncome } from "../../shared/interfaces/income.interface";

export default async function createIncome(
  objective: IObjective,
  form: IIncome
) {
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

  const status = res.status;

  const objectiveUpdated = await res.json();

  return { status, objectiveUpdated };
}
