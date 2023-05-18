import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import readObjective from "../../services/objective/read";
import { Header } from "../../shared/components/Header";
import { Sidebar } from "../../shared/components/Sidebar";
import { IObjective } from "../../shared/interfaces";
import messages from "../../shared/messages";
import { ButtonDelete } from "./ButtonDelete/ButtonDelete";
import { Incomes } from "./Incomes";

export function ScreenObjective() {
  const [isLoading, setIsLoading] = useState(true);
  const [objective, setObjective] = useState<IObjective>();

  const { objectiveId } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const resObjective = await readObjective(Number(objectiveId));
      setObjective(resObjective);
      setIsLoading(false);
    };
    getData();
  }, [objectiveId]);

  if (isLoading) {
    return <span>Carregando...</span>;
  } else if (!objective?.title) {
    return <span>{messages.read.failure}</span>;
  } else {
    const { id, title, goal, description } = objective;
    return (
      <div>
        <Header />
        <Sidebar />
        <h2>{title}</h2>

        <label>Meta: </label>
        <span>R$ {goal} | % Completo</span>

        <label>Valor acumulado: </label>
        <span>R$ </span>

        <p>{description}</p>

        <Link to={`/objective/${id}/edit`}>
          <button>ALT</button>
        </Link>
        <ButtonDelete id={id} />

        <Incomes objective={objective}/>
      </div>
    );
  }
}
