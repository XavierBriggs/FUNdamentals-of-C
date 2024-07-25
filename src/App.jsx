import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Pong from "./pages/Pong";
import Crossword from "./pages/Crossword";
import Life from "./pages/Life";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Pong" element={<Pong />} />
          <Route path="About" element={<About />}/>
          <Route path="Crossword" element={<Crossword />} />
          <Route path="Life" element={<Life/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
