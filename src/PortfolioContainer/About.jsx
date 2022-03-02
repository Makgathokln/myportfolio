import React from 'react'
import './About.css';
import aboutImg from './images/about1.jpg';
function About() {

    //up to top btn


    document.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0)
   
    })
    return (
        <div className='about component__space' id="About">
<div className="container">
    <div className="row">
        <div className="col__2">
            <img src={aboutImg} alt="" className='about__img' style={{width:400, height:350}}/>
            </div>  

        <div className="col__2">
            <h1 className="about__heading">
                About Me
            </h1>

            <div className="about__meta">
                <p className="about__text p__color">
                A forward thinking developer offering more on building, integrating,
testing and supporting web, desktop and android applications. I am
open to learning and equipping myself with the necessary skills.
Experienced with working under pressure and I have good
communication skills. Strong background in customer relations and
 remote support.


                </p>

                {/* <p className="about__text p__color">
                Odio nisi malesuada aliquam penatibus donec augue porta sodales urna fames sociis mi purus justo praesent ornare nonummy. Curabitur hendrerit.

Fames eget luctus velit nascetur. Mi lacus pretium enim, a nam proin. Magnis sit.

Et proin mus cum potenti vestibulum at. Rhoncus porttitor. Ridiculus varius sit hac donec pellentesque mattis sociosqu lacus etiam nunc praesent dolor sociosqu.


                </p> */}

                <div className="about__button d__flex align__items__center">
                {/* <a href="#"><button className="about btn pointer"> Download Cv</button></a> */}
                <a href="#"><button className="about btn pointer">Hire Me</button></a>

                </div>
            </div>
        </div>
    
       </div>
    </div>      
    {/*up to top btn*/}

    <div className="up__to__top__btn">
        <a href="#" className='bottom__to__top'>
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="16" margin=""
     height="16" fill="currentColor" 
    class="bi bi-chevron-up white"
     viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
    </svg>
    </a>
    </div>
    <i class="bi bi-chevron-up"></i>
     </div>
    )
}

export default About