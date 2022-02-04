import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Article } from "../pages/Article";
import { Show } from "../pages/Show";
import { Ask } from "../pages/Ask";
import { Jobs } from "../pages/Jobs";

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Article" element={<Article />}></Route>
      <Route path="/Show" element={<Show />}></Route>
      <Route path="/Ask" element={<Ask />}></Route>
      <Route path="/Jobs" element={<Jobs />}></Route>
    </Routes>
  );
};
