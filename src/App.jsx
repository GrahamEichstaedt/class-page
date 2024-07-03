import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import {
  Admin,
  Coursera,
  Error,
  Home,
  Info,
  Learn,
  Practice,
  Exams
} from './pages';
import './index.css';



function App() {
  const [count, setCount] = useState(0)
  const [ theme, setTheme ] = useState('light');


  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme) { // If has decided which to use before
      setTheme(storedTheme);
    }
    else if(window.matchMedia('(prefers-color-scheme: dark').matches) {
      setTheme('dark'); // Sets system preference if one exists
    }
  }, [])  // Runs on mount


  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={`App ${theme === "light" ? "light" : "dark"}`}>
      <Nav /> 
      <Routes>
        <Route index element={<Home />} /> 
        <Route path='/info' element={<Info />} /> 
        <Route path="/coursera" element={<Coursera />} />
        <Route path="/certmaster-learn" element={<Learn />} />
        <Route path="/certmaster-practice" element={<Practice />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App
