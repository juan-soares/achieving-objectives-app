import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import readObjective from "../../services/objective/read";
import { Header } from "../../shared/components/Header";
import { Loader } from "../../shared/components/Loader";
import { Sidebar } from "../../shared/components/Sidebar";
import { IObjective } from "../../shared/interfaces";
import messages from "../../shared/messages";
import { ButtonDelete } from "./ButtonDelete/ButtonDelete";
import { Incomes } from "./Incomes";
import StyledScreenObjective from "./Objective.styled";

interface IObjectiveProps {
  objective: IObjective;
}

export function ScreenObjective() {
  const [isLoading, setIsLoading] = useState(true);
  const [objective, setObjective] = useState<IObjective>();
  const [netAmount, setNetAmount] = useState<number>(0);
  const [showForm, setShowForm] = useState<boolean>(false);

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

  const ObjectiveContent = (objectiveP: IObjectiveProps) => {
    const { objective } = objectiveP;
    const { id, title, goal, description } = objective;
    const achievement = Math.round((netAmount * 100) / goal);

    return (
      <div className="content-container">
        <h2>{title}</h2>

        <div className="buttons-container">
          <Link to={`/objective/${id}/edit`}>
            <button>ALT</button>
          </Link>
          <ButtonDelete id={id} />
          <button onClick={() => setShowForm(true)}>
            Adicionar Investimento
          </button>
        </div>

        <div className="labels-container">
          <div>
            <label>Meta: </label>
            <span>
              {goal.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}{" "}
            </span>
          </div>
          <div>
            <label>Valor acumulado: </label>
            <span>
              {netAmount.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <div>
            <span>
              {achievement}%{" concluído."}
            </span>
          </div>
        </div>
        <p>{description}</p>

        <Incomes
          objective={objective}
          setObjective={setObjective}
          setNetAmount={setNetAmount}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      </div>
    );
  };

  return (
    <StyledScreenObjective>
      <Header />
      <Sidebar />

      {isLoading && <Loader />}
      {!isLoading && !objective?.title && <span>{messages.read.failure}</span>}
      {!isLoading && objective?.title && (
        <ObjectiveContent objective={objective} />
      )}
    </StyledScreenObjective>
  );
}
