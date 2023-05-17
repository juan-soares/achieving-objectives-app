import { IObjective } from "../../shared/interfaces";

export default async function readObjective(id: number) {
  const res = await fetch(`${process.env.REACT_APP_API}/objective/${id}`);
  const objective: IObjective = await res.json();

  return objective;
}
