import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {isAuth} = useSelector((state)=>state.auth)
  return (
    <div>
      <NavLink to="/"> Home </NavLink>

      {isAuth ? (
        <NavLink to="/dashboard"> Dashboard </NavLink>
      ) : (
        <div>
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/register"> Register </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
