import { useNavigate } from "react-router";
import StyledHeader from "./Header.styled";

export function Header() {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname");

  function logout() {
    const confirm = window.confirm("Deseja realmente sair?");
    if (!confirm) return;

    localStorage.clear();

    navigate("/login");
  }

  return (
    <StyledHeader>
      <nav>
        <label>{nickname}</label>
        <button onClick={logout}>Sair</button>
      </nav>
    </StyledHeader>
  );
}
