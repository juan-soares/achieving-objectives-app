import { IObjective } from "../../shared/interfaces/objective.interface";

export default async function listObjectives() {
  const res = await fetch(`${process.env.REACT_APP_API}/objective`);
  const allObjectivesList: IObjective[] = await res.json();

  const objectivesList = allObjectivesList.filter(
    (objective) => objective.user === localStorage.getItem("nickname")
  );

  return objectivesList;
}
