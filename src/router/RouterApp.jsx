import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "../pages/Chat";
import Login from "../components/Login";
import Register from "../components/Register";
import Landing from "../pages/Landing";

// conf de ruta
// 1 - path -> la url de la ruta
// 2 - elemento -> que queremos mostrar?

const RouterApp = () => {
  return (
    <BrowserRouter basename="/OtroChatMas-FinalFrontend">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
