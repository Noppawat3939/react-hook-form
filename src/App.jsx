import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Container } from "./layouts";
import { ListRoutes } from "./routes/ListRoutes";
import { useId } from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          {ListRoutes.map((route) => (
            <Route path={route.path} element={route.component} key={useId()} />
          ))}
        </Routes>
      </Container>
    </>
  );
}

export default App;
