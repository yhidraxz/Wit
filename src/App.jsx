import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/HomePage.jsx";

function App() {
  return (
    <div data-theme="dark">
      <BrowserRouter basename="/Wit">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
