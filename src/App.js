import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Experience from './components/Experience';

function App() {
  const [changTheme, setChangTheme] = useState(false);

  useEffect(() => {}, [changTheme]);

  return (
    <div className="App"
    style={ 
      changTheme
        ? { background: "black", color: "#91aafd",transition:'2s',textAlign:'center' }
        : { background: "#91aafd", color: "#fefefe",transition:'2s',textAlign:'center' }
    }> 
      <ScrollToTop/>
       <Navbar theme={setChangTheme}/>
        <Routes>
            <Route path='/' element={<Home  theme={changTheme}/> } /> 
            <Route path='/skills' element={<Skills  theme={changTheme} />} />
            <Route path='/experience' element={<Experience/>} /> 
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact />} />
        </Routes> 
        <Footer/>
    </div>
  );
}

export default App;
