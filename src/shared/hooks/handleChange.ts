interface IPropsState {
  [key: string]: string;
}

export default function handleChange(
  e: React.ChangeEvent<HTMLInputElement>,
  state: IPropsState,
  setState
) {
  setState({ ...state, [e.target.id]: e.target.value });
  console.log(state);
}
