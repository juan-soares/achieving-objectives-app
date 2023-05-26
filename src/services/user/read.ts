import { ICredentials } from "./interface";

export default async function readUser(credentials: ICredentials) {
  const res = await fetch(
    `${process.env.REACT_APP_API}/user?email=${credentials.email}&password=${credentials.password}`
  );

  const status = res.status;

  const data = await res.json();
  const nickname = data[0] ? data[0].nickname : null;

  return { status, nickname };
}
