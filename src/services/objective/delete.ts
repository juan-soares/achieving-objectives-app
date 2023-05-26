export default async function deleteObjective(id: number | undefined) {
  const res = await fetch(`${process.env.REACT_APP_API}/objective/${id}`, {
    method: "DELETE",
  });

  return res.status;
}
