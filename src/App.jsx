import { Outlet } from "react-router-dom";
import Home from "./pages/home";
function Body() {
  return (
    <div className="font-sans">
     <Home/>
     <Outlet/>
     </div>
  );
}

export default Body;
