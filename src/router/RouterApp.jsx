  import { BrowserRouter, Routes, Route } from "react-router-dom"
  import Chat from "../pages/Chat"
  import Landing from "../pages/Landing"
  import NotFound from "../pages/NotFound"
  import ProtectedRoute from "../components/ProtectedRoute"
  import Help from "../pages/Help"

  // conf de ruta
  // 1 - path -> la url de la ruta
  // 2 - elemento -> que queremos mostrar?

  const RouterApp = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
          <Route 
            path="/chat" 
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    );
  };

  export default RouterApp
