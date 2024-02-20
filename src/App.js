import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Weather from "./Components/Weather";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Weather />}>
            {" "}
            Weather{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
