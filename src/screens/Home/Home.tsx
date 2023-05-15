import { Navigate } from "react-router";
import { Header } from "./Header";

export  function ScreenHome() {
  const nickname = localStorage.getItem("nickname");

  if (!nickname) return <Navigate to="/login" />;

  return (
    <div>
      Home
      <Header />
    </div>
  );
}
