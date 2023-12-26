import React, { useEffect, useState } from 'react'
import { MdMenu } from "react-icons/md";
import './style.css'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ theme }) => {
  const [dark, setDark] = useState(false)


  useEffect(() => {
    const nav = document.querySelector('.navbarMain');
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add('navbarMain--hidden');
      } else {
        nav.classList.remove('navbarMain--hidden');
      }
      lastScrollY = window.scrollY
    })
  })

  const resume = () => {
    window.open("https://drive.google.com/drive/folders/1v4ovUXHIFI43obv0XsFdWAZ6Zv2_ovVG?usp=sharing", "_blank")
  }


  useEffect(() => {
    theme(dark)
  }, [dark])

  const navigate = useNavigate()

  return (
    <div>
      <div class='navbarMain p-0 m-0'>
        <div class='d-flex justify-content-between col-11 m-auto align-items-center'>
          <div>
            <p onClick={()=>navigate('/')} style={{ marginLeft: '10px', textDecoration: 'underline',cursor:'pointer' }} class="satisfy">
              <span class="display-4 ">S</span>
              <span class="fs-5 fw-bold">neha</span>{" "}
              <span class="display-4" style={{ marginLeft: "5px" }}>
                N
              </span>
              <span class="fs-5 fw-bold">amdev</span>{" "}
            </p>
          </div>

          <div class='lightDark' style={dark ? { background: 'white' } : { background: 'black' }} onClick={() => setDark(!dark)}>
            <div class='lightDarkInner' style={dark ? { background: 'black', left: '30px' } : { background: 'white', left: '2px' }} >

            </div>
          </div>
          <div>
            <div class='pcScreen'>
              <div class='d-flex align-items-center gap-4' >
                <p class='fw-semibold fs-5' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</p>
                <p class='fw-semibold fs-5' style={{ cursor: 'pointer' }} onClick={() => navigate('/skills')}>Skills</p>
                <p class='fw-semibold fs-5' style={{ cursor: 'pointer' }} onClick={() => navigate('/experience')}>Experience</p>

                <p class='fw-semibold fs-5' style={{ cursor: 'pointer' }} onClick={() => navigate('/projects')}>Projects</p>
                <p class='fw-semibold fs-5' style={{ cursor: 'pointer' }} onClick={() => navigate('/contact')}>Contact</p>
              </div>
            </div>
            <div class='mbScreen' >
              <MdMenu class='fw-bold fs-3' data-bs-toggle="offcanvas" href="#navbar" role="button" aria-controls="navbar" />
              
            </div>
          </div>
        </div>
      </div>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="navbar" aria-labelledby="navbarLabel">
                <div class="offcanvas-header">
                  <p style={{ marginLeft: '10px' }} class="satisfy fw-bold">
                    <span class="display-4 ">S</span>
                    <span class="fs-5 fw-bold">neha</span>{" "}
                    <span class="display-4" style={{ marginLeft: "5px" }}>
                      N
                    </span>
                    <span class="fs-5 fw-bold">amdev</span>{" "}
                  </p>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div class='h-100 d-flex align-items-center justify-content-center'>
                    <div>
                      <p class='fw-semibold fs-2 mt-2' data-bs-dismiss="offcanvas" aria-label="Close" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</p>
                      <p class='fw-semibold fs-2 mt-2' data-bs-dismiss="offcanvas" aria-label="Close" style={{ cursor: 'pointer' }} onClick={() => navigate('/skills')}>Skills</p>
                      <p class='fw-semibold fs-2 mt-2' data-bs-dismiss="offcanvas" aria-label="Close" style={{ cursor: 'pointer' }} onClick={() => navigate('/experience')}>Experience</p>

                      <p class='fw-semibold fs-2 mt-2' data-bs-dismiss="offcanvas" aria-label="Close" style={{ cursor: 'pointer' }} onClick={() => navigate('/projects')}>Projects</p>
                      <p class='fw-semibold fs-2 mt-2' data-bs-dismiss="offcanvas" aria-label="Close" style={{ cursor: 'pointer' }} onClick={() => navigate('/contact')}>Contact</p>
                    </div>
                  </div>
                </div>
              </div>


    </div>
  )
}

export default Navbar