import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Navbar from './components/navbar'
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const {isAuth} = useSelector((state)=>state.auth)
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};
const RestrictedRoutes = () => {
  const {isAuth} = useSelector((state)=>state.auth)
  return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<RestrictedRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
