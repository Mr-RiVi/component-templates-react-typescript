import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import IndexRoutes from "./routes/IndexRoutesWithAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
