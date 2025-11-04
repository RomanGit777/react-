import './App.css'
import { A } from './components/A';
import { B } from './components/B';
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";
function App() {
    const [theme, setTheme] = useState<string>('light');
  return (
      <div>

          <MyContext.Provider value={{
              theme: theme,
              changeTheme: (themeValue: string) => {
                  setTheme(themeValue);
              }
          }}>
          <A/>
          <B/>
          </MyContext.Provider>

      </div>  );
}

export default App
