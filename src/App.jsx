import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
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
//     <main className={`${theme}`}>
//       <Nav theme={theme}toggleTheme={toggleTheme}/>
//       <Header />
//       <TextPane textArray={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero animi rerum dignissimos fuga, porro fugiat qui maiores aliquid mollitia expedita sunt praesentium, incidunt similique repellendus? Autem sapiente eum repellendus!",
// "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione possimus cumque, magnam similique architecto dolorum natus ad unde cum nisi a alias veritatis facere vero eaque ducimus numquam, odit officia.",
// "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nihil dolor optio consequuntur rem nostrum. Illum, explicabo a totam inventore distinctio eius itaque ipsam. Cumque, iste pariatur. A, esse tenetur." 
// ]} />
//       <TextPane textArray={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero animi rerum dignissimos fuga, porro fugiat qui maiores aliquid mollitia expedita sunt praesentium, incidunt similique repellendus? Autem sapiente eum repellendus!",
// "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione possimus cumque, magnam similique architecto dolorum natus ad unde cum nisi a alias veritatis facere vero eaque ducimus numquam, odit officia.",
// "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nihil dolor optio consequuntur rem nostrum. Illum, explicabo a totam inventore distinctio eius itaque ipsam. Cumque, iste pariatur. A, esse tenetur." 
// ]} />
//       <TextPane textArray={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero animi rerum dignissimos fuga, porro fugiat qui maiores aliquid mollitia expedita sunt praesentium, incidunt similique repellendus? Autem sapiente eum repellendus!",
// "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione possimus cumque, magnam similique architecto dolorum natus ad unde cum nisi a alias veritatis facere vero eaque ducimus numquam, odit officia.",
// "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nihil dolor optio consequuntur rem nostrum. Illum, explicabo a totam inventore distinctio eius itaque ipsam. Cumque, iste pariatur. A, esse tenetur." 
// ]} />

//     </ main>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route index element={<Home />} />
        <Route path='info' element={<Info />} />
        <Route path="coursera" element={<Coursera />} />
        <Route path="certmaster-learn" element={<Learn />} />
        <Route path="certmaster-practice" element={<Practice />} />
        <Route path="admin" element={<Admin />} />
        <Route path="exams" element={<Exams />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
