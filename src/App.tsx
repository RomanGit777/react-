import './App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "./menu/Menu.tsx";


function App() {
  return (
      <div>
          <Menu/>
          <Outlet/>
      </div>  );
}

export default App
