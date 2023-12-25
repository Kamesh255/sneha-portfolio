import React, { useEffect, useState } from 'react'
import { MdMenu } from "react-icons/md";
import './style.css'
import { useNavigate } from 'react-router-dom';

const Navbar = ({theme}) => {
  const [dark,setDark]= useState(false)


   useEffect(()=>{
    const nav = document.querySelector('.navbarMain');
    let lastScrollY = window.scrollY; 
    window.addEventListener('scroll',()=>{
      if(lastScrollY < window.scrollY){
        nav.classList.add('navbarMain--hidden');
      }else{
        nav.classList.remove('navbarMain--hidden');
      }  
      lastScrollY =window.scrollY 
    })  
})

const resume = () => {
  window.open("https://drive.google.com/drive/folders/1v4ovUXHIFI43obv0XsFdWAZ6Zv2_ovVG?usp=sharing", "_blank")
}


useEffect(()=>{
  theme(dark)
},[dark]) 

const navigate = useNavigate()

  return (
    <div>
      <div class='navbarMain'> 
        <div class='d-flex justify-content-between col-11 m-auto align-items-center'>
            <div>
            <p style={{marginLeft:'10px',textDecoration:'underline' }} class="satisfy">
              <span class="display-4 ">S</span>
              <span class="fs-5 fw-bold">neha</span>{" "}
              <span class="display-4" style={{ marginLeft: "5px" }}>
                N
              </span>
              <span class="fs-5 fw-bold">amdev</span>{" "}
            </p>
            </div>

            <div class='lightDark' style={dark?{background:'white'}:{background:'black'}} onClick={()=>setDark(!dark)}>
                <div class='lightDarkInner' style={dark ?{background:'black',left:'30px'}:{background:'white',left:'2px'}} >

                </div>
            </div>
            <div>
              <div class='pcScreen'> 
                <div class='d-flex align-items-center gap-4' >
                  <p class='fw-semibold fs-5' onClick={()=>navigate('/')}>Home</p> 
                  <p class='fw-semibold fs-5' onClick={()=>navigate('/skills')}>Skills</p>
                  <p class='fw-semibold fs-5' onClick={()=>navigate('/projects')}>Projects</p>
                  <p class='fw-semibold fs-5' onClick={()=>navigate('/contact')}>Contact</p> 
                </div>
              </div>
              <div class='mbScreen' >
                <MdMenu class='fw-bold fs-3' />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar