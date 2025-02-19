
import './App.css';
import Navbar from './components/Navbar';
import Navpage from './components/Navpage';
import { useState } from 'react';
import { HashRouter } from 'react-router';
import { createContext } from 'react';

export const ThemeContext = createContext(null)

function App() {
  
  const [theme, setTheme] = useState(true)
  return (
    <ThemeContext.Provider value={theme}>
    <HashRouter>
    <div className={theme?"App dark":"App"}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Navpage theme={theme}/>
    </div>
    </HashRouter>
    </ThemeContext.Provider>
  );
}

export default App;
