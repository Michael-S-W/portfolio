
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(true)
  return (
    <div className={theme?"App dark":"App"}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
