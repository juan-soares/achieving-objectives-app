import { IPropsState } from "./interface";

export default function handleChange(
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
  state: IPropsState,
  setState: React.Dispatch<React.SetStateAction<any>>
) {
  setState({ ...state, [e.target.id]: e.target.value });
}
