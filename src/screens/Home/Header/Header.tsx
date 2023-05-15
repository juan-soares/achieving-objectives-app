import { useNavigate } from "react-router";

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
    <nav>
      <label>{nickname}</label>
      <button onClick={logout}>Sair</button>
    </nav>
  );
}
