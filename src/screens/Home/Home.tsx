import { Navigate } from "react-router";
import { Header } from "../../shared/components/Header";
import { Sidebar } from "../../shared/components/Sidebar";
import StyledScreenHome from "./Home.styled";

export function ScreenHome() {
  const nickname = localStorage.getItem("nickname");

  if (!nickname) return <Navigate to="/login" />;

  return (
    <StyledScreenHome>
      <Header />
      <Sidebar />
    </StyledScreenHome>
  );
}
