import { useNavigate } from "react-router-dom";
import deleteObjective from "../../../services/objective/delete";
import messages from "../../../shared/messages";

interface IProps {
  id: number | undefined;
}

export function ButtonDelete({ id }: IProps) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirm = window.confirm("Deseja realmente excluir?");
    if (!confirm) return;

    const status = await deleteObjective(id);

    status === 200
      ? window.confirm(messages.delete.sucess)
      : window.confirm(messages.delete.failure);

    navigate("/");
  };

  return <button onClick={handleDelete}>DEL</button>;
}
