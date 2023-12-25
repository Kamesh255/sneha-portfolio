import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { TbBrandBootstrap, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandReactNative, TbBrandRedux, TbBrandTailwind } from 'react-icons/tb'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { DiRuby } from "react-icons/di";
import { SiRuby } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { FaShopify } from "react-icons/fa";
import { GiSlingshot } from "react-icons/gi";
import { FaPhp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { DiHeroku } from "react-icons/di";

const Skills = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});  
},[])
  return (
    <div>
        <div style={{height:'60px'}}></div>
        <p class='display-3 fw-semibold my-5'   data-aos="fade-up">Tech Skills</p>  
        <div class='col-11 row m-auto align-items-center justify-content-cente my-4'>

        <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255, 255, 255, 0.3) 0px 7px 29px 0px"}}>
                <p class=' ' style={{fontSize:'100px',color:''}}><DiRuby /></p>
                <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Ruby</p>
                <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                <p class=' ' style={{fontSize:'100px',color:''}}><SiRuby /></p>
                <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Ruby on Rails</p>
                <br/>
                </div>
            </div>

            

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                <p class=' ' style={{fontSize:'100px',color:''}}><TbBrandHtml5/></p>
                <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>HTML</p>
                <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}} >
                    <p class=' ' style={{fontSize:'100px',color:''}}><TbBrandCss3/></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>CSS</p>
                    <br/>
                </div>
            </div> 

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><TbBrandJavascript/></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Java Script</p>
                    <br/>
                </div>
            </div>

        
           

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}>< FaShopify/></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Shopify </p>
                    <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><DiJqueryLogo /></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Jquery</p>
                    <br/>
                </div>
            </div>
          

          

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><TbBrandBootstrap/></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Bootstrap</p>
                    <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><FaGitlab /></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>GitLab</p>
                    <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><FaGithub /></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Github</p>
                    <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><FaAws /></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>AWS</p>
                    <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><DiHeroku /></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Heroku</p>
                    <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}>C</p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>C</p>
                    <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}>C++</p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>C++</p>
                    <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><GiSlingshot /></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>HAML</p>
                    <br/>
                </div>
            </div>

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><FaNodeJs/></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Node JS</p>
                    <br/>
                </div>
            </div>
          

            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><TbBrandReactNative /></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>Basic React JS</p>
                    <br/>
                </div>
            </div>  
            
            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}><FaPhp /></p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>PHP</p>
                    <br/>
                </div>
            </div>

            
            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}>C#</p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>C#</p>
                    <br/>
                </div>
            </div>

            
            <div class='col-lg-3 col-md-4 col-sm-6 col-11 m-auto '  data-aos="fade-up" >
                <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <p class=' ' style={{fontSize:'100px',color:''}}>AJAX</p>
                    <p class='fs-5 fw-bold mt-2' style={{marginTop:'-15px'}}>AJAX</p>
                    <br/>
                </div>
            </div>

          
        </div>
        {/* <div> 
            <div class='col-md-8 col-11 row m-auto align-items-center  justify-content-between'>
            <p class='display-3 fw-semibold my-5'   data-aos="fade-up">Proficiencies</p> 

                <div class='col-sm-6 col-12' data-aos="fade-up" >
                    <div class='col-11 m-auto  rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                    <br />
                    <img src={require('../images/frontend.png')} alt="react" width="90px" height="90px"/>
                    <p class='fs-5 fw-bold'>Frontend</p> 
                    <br/>
                    <br />
                    </div>
                </div>
                <div class='col-sm-6 col-12   ' data-aos="fade-up"  >
                   <div class='col-11 m-auto rounded-4 mt-4 p-2' style={{background:'rgba(0,0,0,0.1',boxShadow: "rgba(255,255, 255, 0.3) 0px 7px 29px 0px"}}>
                        <br />
                        <img src={require('../images/ds.png')} alt="react" width="120px" height="90px"/>
                        <p class='fs-5 fw-bold'>Data Structures & Algorithms</p>
                        <br/>
                        <br />
                   </div>
                </div> 
            </div>
        </div> */}
    </div>
  )
}

export default Skills