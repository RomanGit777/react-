import '../App.css'
import {Menu} from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";
function MainLayout() {
  return (
      <>
          <Menu/>
          <Outlet/>
      </>  );
}

export default MainLayout
