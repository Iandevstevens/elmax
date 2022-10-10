import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Elmex from "./elmex";
import Meridol from "./meridol";
import Pics from "./pics";

function Home() {
  return <h2>Home</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/elmex">Elmex</Link>
            </li>
            <li>
              <Link to="/meridol">Meridol</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/elmex" element={<Elmex />} />
          <Route path="/meridol" element={<Meridol />} />
          <Route path="/pics" element={<Pics />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
