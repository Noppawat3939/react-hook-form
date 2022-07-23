import { Routes, Route } from "react-router-dom";
import { Home, Error, Start } from "./pages";
import { Module1 } from "./pages/Modules";
import { GlobalStyle } from "./styles";
import { Container } from "./Layouts";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="start" element={<Start />} />
          <Route path="/start/module1" element={<Module1 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
