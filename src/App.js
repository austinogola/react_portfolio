import './App.css';
import Home from './pages/home';
import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom';

function App() {
  useEffect(()=>{
    
  })
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>

    </Routes>
  );
}

export default App;
