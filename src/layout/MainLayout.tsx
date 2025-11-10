import {Outlet} from "react-router-dom";
import {Menu} from "../menu/Menu.tsx";

function MainLayout() {
  return (
      <div>
          <Menu/>
          <hr/>
          <Outlet/>
      </div>  );
}

export default MainLayout
