import { IForm } from "../../screens/Objective/New/interfaces";

export default async function createObjective(form: IForm) {
  const res = await fetch(`${process.env.REACT_APP_API}/objective`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const { id } = await res.json();

  return id;
}
