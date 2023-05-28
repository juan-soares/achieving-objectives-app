import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/themes";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
