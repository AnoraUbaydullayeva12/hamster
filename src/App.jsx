import React from "react";
import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Link to="/"></Link>
      <Link to="/contacts"></Link>
      <Link to="/earn"></Link>
      <Outlet />
    </div>
  );
};

export default App;
