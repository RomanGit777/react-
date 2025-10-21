import '../App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "../menu/Menu.tsx";
function MainLayout() {
  return (
      <>
          <Menu/>
          <hr/>
          <Outlet/>
      </>  );
}

export default MainLayout
