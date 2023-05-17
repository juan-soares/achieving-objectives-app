import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IObjective } from "../../../shared/interfaces";
import lisObjectives from "../../../services/objective/list";
import handleChange from "../../../shared/hooks/handleChange";

export function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState({ value: "" });
  const [objectivesList, setObjectivesList] = useState<IObjective[]>([]);

  useEffect(() => {
    async function getData() {
      const resObjectivesList = await lisObjectives();
      setObjectivesList(resObjectivesList);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <div>
      <input
        type="search"
        id="value"
        value={searchInput.value}
        onChange={(e) => handleChange(e, searchInput, setSearchInput)}
        placeholder="Buscar objetivo..."
      />
      <Link to="/objective/new">
        <button>+</button>
      </Link>

      {isLoading && <span>Carregando...</span>}
      {!isLoading && (
        <nav>
          {!objectivesList.length && <p>Sem resultados.</p>}

          {objectivesList.length > 0 && (
            <ul>
              {objectivesList
                .filter((obj) => obj.title.includes(searchInput.value))
                .map(({ id, title }) => (
                  <li key={id}>
                    <Link to={`/objective/${id}`}>{title}</Link>
                  </li>
                ))}
            </ul>
          )}
        </nav>
      )}
    </div>
  );
}
