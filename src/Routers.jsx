import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
    </Routes>
  )
}
