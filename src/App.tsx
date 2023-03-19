import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import "./styles/main-styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
