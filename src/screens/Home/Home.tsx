import { Navigate } from "react-router";
import { Header } from "../../shared/components/Header";
import { Sidebar } from "../../shared/components/Sidebar";

export function ScreenHome() {
  const nickname = localStorage.getItem("nickname");

  if (!nickname) return <Navigate to="/login" />;

  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
}
