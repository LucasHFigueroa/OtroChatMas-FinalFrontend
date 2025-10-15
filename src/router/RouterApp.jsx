  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Chat from "../pages/Chat";
  import Landing from "../pages/Landing";
  import NotFound from "../pages/NotFound";

  // conf de ruta
  // 1 - path -> la url de la ruta
  // 2 - elemento -> que queremos mostrar?

  const RouterApp = () => {
    return (
      <BrowserRouter basename="/OtroChatMas-FinalFrontend">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default RouterApp;
