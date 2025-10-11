import './App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "./menu/Menu.tsx";
function App() {
  return (
      <>
          This is App component.
          <hr/>
          <Menu/>
          <hr/>
          <Outlet/>
      </>  );
}

export default App
