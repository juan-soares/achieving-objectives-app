import { Navigate } from "react-router";

export default function ScreenHome() {
  const user = null;

  if (!user) return <Navigate to="/login" />;

  return <div>Home</div>;
}
