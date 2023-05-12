import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  function logout() {
    const confirm = window.confirm("Deseja realmente sair?");
    if (!confirm) return;

    localStorage.clear();

    navigate("/login");
  }

  return (
    <nav>
      <button onClick={logout}>Sair</button>
    </nav>
  );
}
