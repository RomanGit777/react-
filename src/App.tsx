import './App.css'
import {A} from "./components/A.tsx";
import {B} from "./components/B.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState<string>('light');
    return (
      <>
          <MyContext.Provider value={{
              theme: theme,
              changeTheme: (themeValue: string) => setTheme(themeValue)
          }}>
          <A/>
          <B/>
          </MyContext.Provider>
      </>
  );
}

export default App
