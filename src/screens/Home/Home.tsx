import { Navigate } from "react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export function ScreenHome() {
  const nickname = localStorage.getItem("nickname");

  if (!nickname) return <Navigate to="/login" />;

  return (
    <div>
      Home
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}
