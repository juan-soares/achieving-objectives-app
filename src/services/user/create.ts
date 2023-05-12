interface IForm {
  [key: string]: string;
}

export default async function createUser(form: IForm) {
  const res = await fetch(`${process.env.REACT_APP_API}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const resStatus = res.status;

  const { nickname } = await res.json();


  return { resStatus, nickname };
}
