import { createBrowserRouter } from "react-router-dom";
import { ScreenError } from "../screens/Error";
import { ScreenHome } from "../screens/Home";
import { ScreenLogin } from "../screens/Login";
import { ScreenObjectiveNew } from "../screens/Objective/New";
import { ScreenRegistration } from "../screens/Registration";

const router = createBrowserRouter([
  {
    path: "",
    errorElement: <ScreenError />,
    element: <ScreenHome />,
    children: [
      {
        path: "/objective/new",
        element: <ScreenObjectiveNew />,
      },
    ],
  },
  {
    path: "/login",
    element: <ScreenLogin />,
  },
  {
    path: "/registration",
    element: <ScreenRegistration />,
  },
]);

export default router;
