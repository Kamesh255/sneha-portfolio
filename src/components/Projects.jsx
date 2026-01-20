import React from 'react'
import AOS from 'aos';
import './style.css'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaNodeJs, FaPhp, FaWordpress} from 'react-icons/fa'; 
import { DiRuby } from "react-icons/di";
import { SiDotnet, SiWoocommerce } from "react-icons/si";
 


import { TbBrandBootstrap, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandReactNative, TbBrandRedux, TbBrandTailwind } from 'react-icons/tb';
 


const project = [ 
   {
      title : "WWE & UFC scoresheet",
      desc : "A web platform to track match results, fighter stats, event outcomes, and score summaries in a clean, user-friendly interface.",
      img: `${require('../image/wwe.png')}`,
      tech : [ <DiRuby />,<TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>],
      live: "https://www.ufc.com/scorecards", 
  },
    {
      title : "Chofeur",
      desc : "The ecommerce site is a custom Rails app integrated with Shopify, and it recently underwent updates to enhance its functionality. ",
      img: `${require('../image/chofeur.png')}`,
      tech : [ <DiRuby />,<TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>],
      live: "https://chofeur.com/", 
  },
    {
        title : "Stadium Goods",
        desc : "Design a web application for E-commerce goods using ROR. It is a ecommerce site for goods and it is the world's premier sneaker and streetwear marketplace. ",
        img: `${require('../image/stadium.png')}`,
        tech : [ <DiRuby />,<TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>],
        live: "https://www.stadiumgoods.com/en-in/", 
    },
    {
      title : "Censio",
      desc : "Designed a web application for Online examination using Ror API. It is a Fair, objective, unbiased insights into student behavior to inform the collegeadmissions process and identify developmental and learning needs of the students",
      img: `${require('../image/censio.png')}`,
      tech : [ <DiRuby />,<TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>],
      live: "https://censioanalytics.com/",   
  },
  {
    title : "Ibat",
    desc : "Designed a web application which provides authoritative geographic information about global biodiversity.",
    img: `${require('../image/Ibat.png')}`,
    tech : [ <DiRuby />,<TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>],
    live: "https://www.ibat-alliance.org/",   
},
{
  title : "BTCA",
  desc : "Designed a web application for using CMS. The Better Than Cash Alliance is a global partnership of 80 governments, companies, and International Organizations that accelerates the transition from cash to responsible digital payments to help achieve the Sustainable Development Goals. ",
  img: `${require('../image/btca.png')}`,
  tech : [ <DiRuby />,<TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>],
  live: "https://www.betterthancash.org/",   
},
{
  title : "Buzz",
  desc : "Buzz is a smart parking booking system that provides institutes students an easy way of reserving a parking space online using a web portal.",
  img: `${require('../image/buzz.png')}`,
  tech : [ <DiRuby />,<TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>],
  live: "https://www.domo.com/business-intelligence/features/buzz",  
},
{
  title : "Cleversteam",
  desc : "Design a web application for managing jobs, studies, hostels etc related details using ROR. Cleversteam is a global digital agency with a sharp focus towards travel and sports. ",
  img: `${require('../image/cleversteam.png')}`,
  tech : [ <DiRuby />,<TbBrandJavascript/>,<TbBrandCss3/>, <TbBrandHtml5/>],
  live: "https://cleversteam.com/",  
 
},
{
  title : "Family Biz",
  desc : "Design a web application for managing Income related details using DotNet Core, DotNet Web API, C#",
  img: `${require('../image/familyBiz.png')}`,
  tech : [<SiDotnet />, <FaNodeJs />,<FaPhp />],
  live: "https://www.familybiz.co.il/",  
},
{
  title : "Football league",
  desc : "Design a web application for managing football match details and their score using DotNet Core, DotNet Web API, C#.",
  img: `${require('../image/efl.png')}`,
  tech : [<SiDotnet />, <FaNodeJs />,<FaPhp />],
  live: "https://www.efl.com/",  
},
{
  title : "Online Examination",
  desc : "Design a web application for conducting exam using NodeJs API.",
  img: `${require('../image/pro.webp')}`,
  tech : [ <FaNodeJs />],
  live: "/",  
}, 
{
  title : " Accountant Lalaji",
  desc : " Design a website using WordPress.",
  img: `${require('../image/accountantlalaji.png')}`,
  tech : [<FaWordpress />],
  live: "https://accountantlalaji.com/",   
},

{
  title : "Krishiparivartan",
  desc : " Design a website using WordPress.",
  img: `${require('../image/krishiparivartan.png')}`,
  tech : [<FaWordpress />],
  live: "https://krishiparivartan.com/",   
},
 
      
];

const Projects = ({theme}) => {
    useEffect(()=>{
        AOS.init({duration: 1000});  
    },[])
  return (
    <div id=''>
        <div style={{height:'100px'}}></div>
        <div>
            <p class='display-3 fw-semibold  ' data-aos="fade-up">Projects</p> 


            <div class='col-md-12 col-11 m-auto row gap-5 justify-content-center mt-5'>
            {project.map((e) => (
                    <> 
                        <div class="col-md-5   col-12  rounded-4 projectDiv   " data-aos="flip-left"  
                        style={
                        {boxShadow: "rgba(255, 255, 255, 0.3) 0px 7px 29px 0px", background:'rgb(0,0,0,0.1)' }
                       
                        }>
                            <div class='' style={{height:'250px',marginTop:'10px'}}>
                                <img class='rounded-4 projectImg' src={e.img} style={{}} alt="project"  />
                            </div>
                            <div class= "p-3">
                                <p class='fs-1 fw-semibold'>{e.title}</p>  
                                <p class='' >{e.desc}</p>  
                                <div class='d-flex my-3'> 
                                    <p class='text-start'> <span class='fw-bold '>Project : </span> <span  class={e.status == "Completed"? 'text-success fw-bold mx-2' : "text-warning fw-bold mx-2"}>{e.status}</span> </p>
                                    <a  target='_blanck' href={`${e.live}`} class=' fw-bold text-warning'>Link</a>  
                                </div>
                                <div class=' '>
                                    < p class='fs-4 fw-semibold'  >Tech Stack</p >
                                    <div class="d-flex fs-1 gap-3 justify-content-center" style={{marginTop:"-5px"}}>
                                        {e.tech.map((tech) => {
                                            return(
                                                <p class=''>{tech}</p>
                                            )
                                        })}
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </>
                ))} 

            </div>

        </div>
    </div>
  )
}

export default Projects