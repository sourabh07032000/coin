import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Trade from "./Trade";
import Mine from "./Mine";

import Footer from "./Footer";

function App() {
  return (
    <HashRouter>
   
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/Trade" element={<Trade />}></Route>
        <Route path="/Mine" element={<Mine />}></Route>
      </Routes>
      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
