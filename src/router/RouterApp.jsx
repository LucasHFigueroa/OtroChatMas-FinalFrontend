import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "../pages/Chat";
import Login from "../pages/Login";

// conf de ruta
// 1 - path -> la url de la ruta
// 2 - elemento -> que queremos mostrar?

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/chat" element={<Chat />} />
                <Route path="/OtroChatMas-FinalFrontend" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;
