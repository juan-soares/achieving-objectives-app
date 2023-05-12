import { createBrowserRouter } from "react-router-dom";
import ScreenError from "../screens/Error";
import ScreenHome from "../screens/Home";
import ScreenLogin from "../screens/Login";
import ScreenRegistration from "../screens/Registration";

const router = createBrowserRouter([
  {
    path: "",
    errorElement: <ScreenError />,
    element: <ScreenHome />,
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
