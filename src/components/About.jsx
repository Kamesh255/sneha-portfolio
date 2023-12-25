import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './about.css'
import { BsFillCircleFill } from "react-icons/bs";

const arthro3d = [
    {
        title:'School', 
    },
    {
        title:'Graduation', 
    },
    {
        title:'Internship', 
    }, 
    
]

const About = ({theme}) => { 
    const [arthro, setArthro] = useState('Graduation')
    const [displayedArthro, setDisplayedArthro] = useState(arthro3d);
    const [rotationAngle, setRotationAngle] = useState(0); 

    useEffect(() => {
        AOS.init({ duration: 1500 });
      });

      const handleImgClick = (index) => {
        const line1 = document.querySelector('.leserLine1')
        const line2 = document.querySelector('.leserLine2')
        line1.classList.remove('activeLine')
        line2.classList.remove('activeLine') 

        if (index !== -1 && index !== displayedArthro.length / 2) { 
            const middleIndex = Math.floor(arthro3d.length / 2); 
            const updatedArthro3d = [...displayedArthro]; 
            [updatedArthro3d[index], updatedArthro3d[middleIndex]] = [updatedArthro3d[middleIndex], updatedArthro3d[index]];
            setRotationAngle((prevAngle) => prevAngle + 360);
            setArthro(displayedArthro[index].title);
            setDisplayedArthro(updatedArthro3d)
            setTimeout(()=>{
                line1.classList.add('activeLine')
                line2.classList.add('activeLine') 
            },2000)
        }
    };

      useEffect(() => {
        const texts = document.querySelectorAll(".skilltext p span"); 
        texts.forEach((span, i) => {
          span.style.transform = `rotate(${rotationAngle + i * 40}deg)`;
        });
      }, [rotationAngle]);
    
    
  return (
    <div style={{overflow:'hidden'}}>
        <div class='row align-items-center'>
            <div class='col-md-6'>
                <div class='col-10 m-auto text-start'>
                    <p class='display-3 fw-medium' >Education</p>
                    <div class='d-flex gap-5 align-items-center mt-5' >

                        {
                            displayedArthro.map((el,i)=>{
                                return(
                                    <div class='d-flex align-items-center' onClick={()=>handleImgClick(i)} style={arthro == `${el.title}` ? {cursor:'pointer',color:'#0030c0',transition:'1s',fontWeight:'bold'}:{cursor:'pointer',transition:'1s'}}>
                                    <div style={{width:'fit-content'}}> 
                                        <div class='d-flex align-items-center'>
                                            <div style={arthro == `${el.title}` ? {color:'#0030c0',transition:'1s'}:{transition:'1s'}}><BsFillCircleFill/></div>
                                            <div style={arthro == `${el.title}` ? {width:'100%',height:'1px',border:'1px solid #0030c0',transition:'1s',}: {width:'100%',height:'1px',border:'1px solid',transition:'1s'}}></div>
                                        </div>
                                        <p class='px-2 mt-2' style={{width:'fit-content',fontSize:'14px',}} >{el.title}</p>
                                    </div>  
                                </div>
                                )
                            })
                        } 
                        
                    </div>

                    <div>
                        {arthro == "School" ? 
                            <div class='col-sm-10 mt-3' >  
                                <div class='my-4'>
                                    <p class='fs-1'>Secondary School </p>
                                    <p class='fs-5'>Fr. Agnel School Berasia - Bhopal (2013)</p>  
                                </div> 
                                <div class='my-4'>
                                    <p class='fs-1'>Higher Secondary School </p>
                                    <p class='fs-5'>Red Rose Schools Bhopal (2015)</p> 
                                </div> 
                            </div>
                            :''
                        }

                        {arthro == "Graduation" ?  
                           <div class='col-sm-10 mt-3' >  
                                <div class='my-4'> 
                                    <p class='fs-1'>Bachelor Of Engineering</p>
                                    <br />
                                    <p class='fs-5'> Sagar Institute of Science & Technology, Bhopal <br /> <b>Information Technology</b> (July 2015 - June 2019)</p> 
                                </div> 
                             
                                    <p class='fs-1'>Certificates</p>

                                    <ul>
                                    <li class='fs-5'> Topper of 1st to 8th semester in college.</li>
                                    <li class='fs-5'>  Participate in SIH (Smart India Hackathon) 2018.</li>
                                    <li class='fs-5'>  Participate in CodeVita 2018 & 2019 organise by TCS.</li>
                                    <li class='fs-5'> Participate in Sanchar Khoj and win first prize.</li>

                                    </ul> 
                                 
                            </div>
                            :"" 
                        }

                        {arthro == "Internship" ? 
                               <div class='col-sm-10 mt-3' >  
                               <div class='my-4'>
                                   <p class='fs-1'>Software Intern</p>
                                     <br /> 
                                   <p class='fs-5'> <b>Vias Groups, Bhopal</b> <br />(Jun. 2018 - Aug. 2018)</p> 
                                   <br />
                                   <p class='fs-5'><b>Think Future Technology, Bhopal</b> <br />(Oct. 2018 - Apr. 2019)</p> 

                               </div> 
                                
                           </div>
                            :""
                        }

                    </div>   
                </div>
            </div>
            <div class='col-md-6 skillcircleSlider' style={theme ? {color:'white'}: {color:'black'}}> 
                <div className="skillcircle" >
                    <div className="skilllogo">
                        <div> 
                        <img src={require('../image/education.png')} alt="" />
                        </div>
                    </div>
                    <div class='leserLine1'  style={theme ? {borderColor:'white'}: {borderColor:'black'}}></div>
                    <div class='leserLine2' style={theme ? {borderColor:'white'}: {borderColor:'black'}}></div>

                    <div className="skilltext">
                        <p>  
                            {displayedArthro.map((el,i)=>{
                                return(
                                    <span  key={i}
                                    onClick={() => handleImgClick(i)}
                                    style={
                                    arthro == el.title
                                        ? { webkitFilter: 'drop-shadow(5px 5px 5px #8d97c0 )'
                                            , filter : 'drop-shadow(3px 5px 20px #8d97c0)'  }
                                        : {}
                                    }
                                >
                                    {" "}
                                    <p class='fs-5' style={theme ? {color:'white'}: {color:'black'}}>{el.title}</p>
        
                                </span> 
                                )
                            })}  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About