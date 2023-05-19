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
  const [netAmount, setNetAmount] = useState<number>(0);

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
        <span>
          {goal.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}{" "}
          | 1% Completo
        </span>

        <label>Valor acumulado: </label>
        <span>
          {netAmount.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>

        <p>{description}</p>

        <Link to={`/objective/${id}/edit`}>
          <button>ALT</button>
        </Link>
        <ButtonDelete id={id} />

        <Incomes objective={objective}  setNetAmount={setNetAmount}/>
      </div>
    );
  }
}
