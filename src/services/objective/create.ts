import { IObjective } from "../../shared/interfaces";

export default async function createObjective(form: IObjective) {
  const res = await fetch(`${process.env.REACT_APP_API}/objective`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const { id } = await res.json();

  return id;
}
