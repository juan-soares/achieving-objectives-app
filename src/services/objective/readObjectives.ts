export default async function readObjectives() {
  const res = await fetch(`${process.env.REACT_APP_API}/objective`);
  const objectivesList = await res.json();

  return objectivesList;
}
