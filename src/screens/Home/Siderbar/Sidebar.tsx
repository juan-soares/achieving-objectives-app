import { useState } from "react";
import { Link } from "react-router-dom";
import handleChange from "../../../shared/hooks/handleChange";
import { IObjective } from "./interfaces";

export function Sidebar() {
  const [searchInput, setSearchInput] = useState({ value: "" });
  const [objectivesList, setObjectivesList] = useState<IObjective[]>([
    { id: "1", title: "Era" },
  ]);

  return (
    <div>
      <input
        type="search"
        id="value"
        value={searchInput.value}
        onChange={(e) => handleChange(e, searchInput, setSearchInput)}
        placeholder="Buscar objetivo..."
      />
      <button>+</button>

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
    </div>
  );
}
