import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="login" />;
    return children;
  };
  // console.log(currentUser);
  return (
    <BrowserRouter basename="chatapp-firebase/">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={currentUser ? <Home /> : <Login />} />
          <Route
            path="register"
            element={currentUser ? <Home /> : <Register />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
