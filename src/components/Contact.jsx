import React from 'react'
import { MdCall, MdLocationPin, MdMail } from "react-icons/md";

const Contact = ({theme}) => {
  return (
    <div>
    <div style={{height:'100px'}}></div>
    <div class='col-11 m-auto row rounded-5 p-2 gap-md-0 gap-4' style={{backgroundColor:'rgba(0,0,0,0.2)'}} >
        <div class='col-lg-4 col-md-6'>
            <div class='col-11 m-auto text-start'>
              <p class='fs-1 fw-bold my-2'>Contact</p>
              <p class='d-flex  align-items-center gap-2 fw-bold fs-4' >
                  <p><MdCall /></p>
                  <p class='mt-1'>Mobile No :</p>
              </p>
              <a class='mx-4 fw-semibold'  href="tel:+919340538340" style={theme ? {color:'#6289ff'}:{color:'#ffffff'}} >+91 9340538340</a>  

              <p class='d-flex align-items-center gap-2 fw-bold fs-4 mt-2'    >
                  <p><MdMail /></p>
                  <p class='mt-1'>Mail :</p>
              </p>
              <a class='mx-4 fw-semibold'  href="mailto:snehanamdev8@gmail.com" style={theme ? {color:'#6289ff'}:{color:'#ffffff'}}>snehanamdev8@gmail.com</a>

              <div class='d-flex align-items-center gap-2 fw-bold fs-4 mt-2'>
                  <p><MdLocationPin /></p>
                  <p class='mt-1'>Address :</p>
              </div>
              <p class='mx-4 fw-semibold' style={theme ? {color:'#6289ff'}:{color:'#ffffff'}}>Indore, Madhya Pradesh, India</p>

            </div>
        </div>
        <div class='col-lg-8 col-md-6'>
              <div class='col-11 m-auto my-3'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.34658838416!2d77.24073446811443!3d23.199639108984826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1703359461940!5m2!1sen!2sin" width="100%" height="450" style={{border:0,borderRadius:'20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
        </div>

    </div>
  </div>
  )
}

export default Contact