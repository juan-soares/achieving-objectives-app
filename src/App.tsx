import { RouterProvider } from "react-router-dom";
import router from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
