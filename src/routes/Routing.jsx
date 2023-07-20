import { Routes, Route } from "react-router-dom";
import { WordCounter, ChuckNorrisJokes, PageNotFound } from "../pages";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<WordCounter />} />
      <Route path="/jokes" exact element={<ChuckNorrisJokes />} />
      <Route path="*" exact element={<PageNotFound />} />
    </Routes>
  );
};
