// import React from "react";
// import { Router } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
