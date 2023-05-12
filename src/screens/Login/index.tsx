import { Link } from "react-router-dom";

export default function ScreenLogin() {
  return (
    <div>
      <p>
        Ainda não tem uma conta? <Link to="/registration">Registre-se.</Link>
      </p>
    </div>
  );
}
