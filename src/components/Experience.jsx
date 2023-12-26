import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
 

const experience = [
    {
        title: "Gammastack",
        time: "( jan 2022 - Present )",
        desc: "GammaStack is an end–to–end IT services and solutions provider which offers plethora of services accompanied with out-of-box approach.",
        img: `${require('../image/experience/gammastack_logo.jpg')}`,
        role_and_Responsibility: [
          "Sr. Solution Engineer",
        ],
        achievements :  [ 
            "Created multiple applications.",
            "Resolved complex bugs and issues in existing projects.",
            "Built a significant print website for thousands of users successfully.",
          ],                                                                                                                          
      }, 
    {
    title: "Oak Tree Cloud",
    time: "( July 2021 - Jan 2022 )",
    desc: "Oaktree software is a partner of innovation and a ray of hope for diverse world’s leading enterprises, SME’S and technology channellers. We bring together a team of passionate minds whose DNA echoes to bring victory to your businesses with authentic software, apps, and Salesforce development solutions.",
    img: `${require('../image/experience/oaktreecloud.png')}`, 
    role_and_Responsibility: [
      "Software Developer", 
    ],
    achievements :  [ 
        "Created multiple applications.",
        "Resolved complex bugs and issues in existing projects.",
        "Built a significant print website for thousands of users successfully.",
      ],                                                                                                                         
  },  
  {
    title: "Bestpeers",
    time: "( June 2019 - July 2021)",
    desc: "Years of delivering high-quality services, on time, with competitive pricing have earned us an outstanding reputation in the market. This is why we have been voted as one of the best software companies in Indore. ",
    img: `${require('../image/experience/bestpears.png')}`, 
    role_and_Responsibility: [
      "Software Developer", 
    ],
    achievements :  [ 
        "Created multiple applications.",
        "Resolved complex bugs and issues in existing projects.",
        "Built a significant print website for thousands of users successfully.",
      ],                                                                                                                         
  },  
  {
    title: "Think Future Technology",
    time: "( Oct 2018 - April 2019 )",
    desc: "Think Future Technologies is a leading provider of Technology talent and services for your Enterprise and your Product. ",
    img: `${require('../image/experience/tft.png')}`, 
    role_and_Responsibility: [
      "Software Intern", 
    ],
    achievements :  [ 
        "Created multiple applications.",
        "Resolved complex bugs and issues in existing projects.",
        "Built a significant print website for thousands of users successfully.",
      ],                                                                                                                         
  },  
  {
    title: "Vias Groups",
    time: "( June 2018 - Aug 2018 )",
    desc: "Vias Groups is a Web Development and Web Designing Company in bhopal, bangluru, mumbai and delhi. ",
    img: `${require('../image/experience/viasgroup.png')}`, 
    role_and_Responsibility: [
      "Software Developer", 
    ],
    achievements :  [ 
        "Created multiple applications.",
        "Resolved complex bugs and issues in existing projects.",
        "Built a significant print website for thousands of users successfully.",
      ],                                                                                                                         
  },  
];

const Experience = ({theme}) => {
    useEffect(()=>{
        AOS.init({duration: 1000});  
    },[])
  return (
    <div id='experience'> 
     <div style={{height:'100px'}}></div>
        <div>
            <p class='display-3 fw-semibold'  data-aos="fade-up">Experience</p>

            <div>
                {experience.map((e)=>{
                    return(
                        <div class='col-sm-10 col-11 m-auto row my-5 align-items-center rounded-4' data-aos="flip-right"  style={{boxShadow: "rgba(255, 255, 255, 0.3) 0px 7px 29px 0px", background:'rgb(0, 0, 0,0.1)'}
                           
                            }>
                              
                                <div class='col-md-5 col-12'>
                                    <div class='mt-3' data-aos="zoom-in" data-aos-duration="2000">
                                        <img class='rounded-4' style={{ maxHeight:'400px'}} src= {e.img} alt={e.img} />
                                    </div>
                                </div>
                                <div class='col-md-6 col-12 text-start'>
                                    <div class='my-3'> 
                                        <p><span class='fs-2 fw-semibold'>{e.title}</span></p>
                                        <p class='text-end  fw-semibold'>{e.time}</p>
                                        <p class='fs-5'>{e.desc}</p> 
                                        <p class='fw-semibold mt-2 fs-5'>Role and Responsibility -</p>
                                        <ul class='m-0'> 
                                            {e.role_and_Responsibility.map((el) => (
                                            <li class='fs-5' style={{ listStyle:"block",listStyleType:"square"}}> {el}</li>
                                            ))} 
                                        </ul>   
                                        <p class='fw-semibold mt-2 fs-5'>Achievements -</p>
                                        <ul class='m-0' > 
                                            {e.achievements.map((el) => (
                                            <li class='fs-5' style={{ listStyle:"block",listStyleType:"square"}}> {el}</li>
                                            ))} 
                                        </ul>  
                                    </div>
                                </div> 
                             
                        </div>
                    )
                })}

            </div>

        </div>
    </div>
  )
}

export default Experience