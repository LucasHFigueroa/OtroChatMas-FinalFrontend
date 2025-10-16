  import { BrowserRouter, Routes, Route } from "react-router-dom"
  import Chat from "../pages/Chat"
  import Landing from "../pages/Landing"
  import NotFound from "../pages/NotFound"
  import ProtectedRoute from "../components/ProtectedRoute"

  // conf de ruta
  // 1 - path -> la url de la ruta
  // 2 - elemento -> que queremos mostrar?

  const RouterApp = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route 
            path="/chat" 
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }/>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default RouterApp
