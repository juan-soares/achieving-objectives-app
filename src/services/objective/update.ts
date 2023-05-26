import { IObjective } from "../../shared/interfaces";

export default async function updateObjective(
  id: number | undefined,
  form: IObjective
) {
  const res = await fetch(`${process.env.REACT_APP_API}/objective/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  return res.status;
}
