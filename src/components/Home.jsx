import React, { useEffect } from 'react'
import About from './About'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = ({theme}) => {

  useEffect(()=>{
    AOS.init({duration: 1000});  
},[])
  return (
    <div>
       <div class='row align-items-center '>
        <div class='col-md-6'>
          <br />
          <div class='col-9 m-auto my-5' data-aos="zoom-in">
            <img src={require('../image/sneha.jpeg')} class='pImg' style={{objectFit:'cover',borderRadius:'50%'}} alt="" />
          </div>
        </div>

        <div class='col-md-6'>
            <div class='col-11 m-auto text-start'> 
              <p class='display-3 fw-bold'  data-aos="zoom-in"style={theme ? {color:'white'}:{color:'#000000'}}>Sneha Namdev</p>
              <p class='fs-1 fw-semibold' data-aos="zoom-in">Sr. Ruby on Rails Developer</p> 
            </div>
        </div>

        <div class='col-11 row m-auto align-items-start justify-content-around gap-5 my-5'>
          <div class='col-md-5 '> 
            <p class='fs-3 text-start ' data-aos="fade-up">I have around 6+ years of experience as a <b>Full-Stack Developer</b> . Hands-on experience working on technologies 
            like <b>Ruby on Rails, HTML, HAML, CSS, Bootstrap, jQuery, JavaScript</b>  and cloud technologies like <b>AWS</b>  and <b> Heroku</b>.</p>
          </div>

          <div class='col-md-5  '> 
            <p class='fs-3 text-start' data-aos="fade-up">  I am holding experience working on API integration. I have worked with various types of projects on multiple 
            programming languages and coding as well as software testing and debugging.</p>
          </div>
        </div>

        <div data-aos="fade-up">
          <About theme={theme}/>
        </div>

      

       </div>
    </div>
  )
}

export default Home