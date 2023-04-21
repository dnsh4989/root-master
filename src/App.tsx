import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Blogs from "./pages/Blogs/Blogs";
import Details from "./pages/Blogs/Details/Details";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Details />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
