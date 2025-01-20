import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contacts from "./pages/Contacts";
import Details from "./pages/Detail";
import Login from "./Login";
import { AuthProvider, useAuth } from "./components/AuthContext";  

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

function AppRoutes() {
  const location = useLocation();  

  return (
    <>
      {location.pathname !== "/" && <Navbar />} 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute component={Home} />} />
        <Route path="/info" element={<PrivateRoute component={Info} />} />
        <Route path="/contacts" element={<PrivateRoute component={Contacts} />} />
        <Route path="/details/:id" element={<PrivateRoute component={Details} />} />
      </Routes>
    </>
  );
}

function PrivateRoute({ component: Component }) {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Component /> : <Login />;
}

export default App;
