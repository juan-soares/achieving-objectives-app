import { createBrowserRouter } from "react-router-dom";
import { ScreenError } from "../screens/Error";
import { ScreenHome } from "../screens/Home";
import { ScreenLogin } from "../screens/Login";
import { ScreenObjectiveNew } from "../screens/ObjectiveNew";
import { ScreenObjective } from "../screens/Objective";
import { ScreenRegistration } from "../screens/Registration";
import { ScreenObjectiveEdit } from "../screens/ObjectiveEdit/ObjectiveEdit";

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
      {
        path: "/objective/:objectiveId",
        element: <ScreenObjective />,
      },
      {
        path: "/objective/:objectiveId/edit",
        element: <ScreenObjectiveEdit />,
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
