import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";



function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
