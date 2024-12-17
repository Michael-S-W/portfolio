
import './App.css';
import Navbar from './components/Navbar';
import Navpage from './components/Navpage';
import { useState } from 'react';
import { BrowserRouter } from 'react-router';


function App() {
  const [theme, setTheme] = useState(true)
  return (
    <BrowserRouter>
    <div className={theme?"App dark":"App"}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Navpage/>
    </div>
    </BrowserRouter>
  );
}

export default App;
