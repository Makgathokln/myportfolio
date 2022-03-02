import React, {useState} from 'react';
import './Home.css'
import aboutImg from './images/about1.jpg';

 function Home(){

    //fixed header

    document.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 0)
   
    })

    const [show, setShow] = useState(true);

    return(
        <div className='home' id="Home">
               <div className='home__bg'>
                   <div className="header d__flex align__items__center pxy__30 ">
                        <div className="logo">

                        </div>

                        <div className="navigation pxy__30">
                            <ul className="navbar d__flex">
                                <a href="#Home">
                                    <li className='nav__items mx__15'>Home</li>
                                </a>

                                <a href="#About">
                                    <li className='nav__items mx__15'>About</li>
                                </a>

                                <a href="#Service">
                                    <li className='nav__items mx__15'>Service</li>
                                </a>
                                <a href="#Project">
                                    <li className='nav__items mx__15'>Portfolio</li>
                                </a>
                                <a href="#Contact">
                                    <li className='nav__items mx__15'>Contact</li>
                                </a>
                            </ul>
                        </div>
                   </div>

                   {/*Toggle Menu*/}
                   {/* <div className="toggle__menu">
                   <svg onClick={() => setShow(!show)}
                   xmlns="http://www.w3.org/2000/svg"
                    width="50" height="50" 
                   fill="currentColor" class="bi bi-list white"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd" 
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                   </div>

                    {show ?(
                    <div className="sideNavBar">
                        <ul className="sidebar d__flex">
                            <li className='sideNavbar'>
                                <a href="#Home">Home</a>
                            </li>

                            <li className='sideNavbar'>
                                <a href="#About">About</a>
                            </li>

                            <li className='sideNavbar'>
                                <a href="#Service">Services</a>
                            </li>

                            <li className='sideNavbar'>
                                <a href="#Project">Project</a>
                            </li>

                            <li className='sideNavbar'>
                                <a href="#Contact">Contact</a>
                            </li>
                        </ul>

                    </div>
                    ):null} */}
                    {/*Home Content */}

                    <div className="container">
                    <div className="home__content">

                        <div className="col__meta">
                            <h1 className="home__text pz__10">
                                WELCOME TO MY ONLINE RESUME
                            </h1>
                            <h2 className="home__text pz__10">
                                Hi, I'm Leah Makgatho
                            </h2>
                            <h3 className="home__text sweet pz__10">
                                Front End Developer
                            </h3>
                            <h4 className="home__text pz__10">
                                based in Polokwane, Limpopo.
                            </h4>
                        </div>
                        <img src={aboutImg} alt="" className='home__img'/>

                            
                    </div>
  

                  
                    </div>
                   

                   </div>
        </div>
    )
}

export default Home;