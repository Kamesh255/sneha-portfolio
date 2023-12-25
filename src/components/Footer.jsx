import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
const navigate = useNavigate()

  return (
    <div>
        <div class='col-11 row m-auto mt-5' style={{borderTop:'1px solid white'}}>
           
            <div class='col-md-8 text-start mt-4'>
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

                <div class=' col-11 mt-3 m-auto d-flex gap-4 flex-wrap row-gap-2 '>
                    <p class='fw-semibold fs-5' style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Home</p> 
                    <p class='fw-semibold fs-5' style={{cursor:'pointer'}} onClick={()=>navigate('/skills')}>Skills</p>
                    <p class='fw-semibold fs-5' style={{cursor:'pointer'}} onClick={()=>navigate('/projects')}>Projects</p>
                    <p class='fw-semibold fs-5' style={{cursor:'pointer'}} onClick={()=>navigate('/contact')}>Contact</p> 
                </div>
            </div>
            <div class='col-md-4 mt-4 text-start'>
                <div class='col-11 m-auto'> 
                    <p class='fw-semibold'>Bhopal, Madhya Pradesh, India</p> 
                    <p class='fw-semibold my-2'>snehanamdev8@gmail.com</p>
                    <p class='fw-semibold'>+91 9340538340</p> 
                </div>
            </div>

        </div>
        <br />
    </div>
  )
}

export default Footer