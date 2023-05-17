import { IObjective } from "../../shared/interfaces/objective.interface";

export default async function listObjectives() {
  const res = await fetch(`${process.env.REACT_APP_API}/objective`);
  const objectivesList: IObjective[] = await res.json();

  return objectivesList;
}
