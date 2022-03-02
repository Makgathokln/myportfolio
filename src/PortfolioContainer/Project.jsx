import React from "react";
import './Project.css';
import Project1 from './images/project1.jpg';
import HotelApp from './images/HotelApp.jpg';
import Crud from './images/crud.png';
import Todo from './images/todo.jpg';


function Project(){
    return(
        <div className="project component__space" id="Project">
                <div className="heading">
                    <h1 className="heading">My Latest Projects</h1>
                <p className="heading p__color"> Below are my services, I make sure that I am reliable and hard 
                working in each and every task assigned to me.
               </p>
                
                <p className='heading p__color'>
                I give out only the best.
                </p>
                </div>

            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__img__box pointer relative">
                            <div className="project__img__box">

                                <img src={Todo} alt="" className="project__img" style={{width:400,height:300}} />
                            </div>

                            <div className="mask__effect">

                            </div>


                            </div>
                            <div className="project__meta absolute">
                                  <h4 className="project__text">Todo App</h4>
                                    <a href="https://github.com/Makgathokln/doto" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                    <div className="project__box pointer relative">
                            <div className="project__img__box pointer relative">
                            <div className="project__img__box">

                                <img src={Crud} alt="" className="project__img" style={{width:400,height:300}} />
                            </div>

                            <div className="mask__effect">

                            </div>


                            </div>
                            <div className="project__meta absolute">
                                  <h4 className="project__text">Student Registration</h4>  
                                    <a href="https://github.com/Makgathokln/crud1---Copy" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                    <div className="project__box pointer relative ">
                            <div className="project__img__box pointer relative">
                            <div className="project__img__box">

                                <img src={Project1} alt="" className="project__img" style={{width:400,height:300}} />
                            </div>

                            <div className="mask__effect">

                            </div>


                            </div>
                            <div className="project__meta absolute">
                                  <h4 className="project__text">Online Resume</h4>  
                                    <a href="https://makgathokln.github.io/Home.html" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                    <div className="project__box pointer relative ">
                            <div className="project__img__box pointer relative">
                            <div className="project__img__box">

                                <img src={HotelApp} alt="" className="project__img" style={{width:400,height:300}}/>
                            </div>

                            <div className="mask__effect">

                            </div>


                            </div>
                            <div className="project__meta absolute">
                                  <h4 className="project__text">Hotel App</h4>  
                                    <a href="https://github.com/Makgathokln/practhotel" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>

                   

                   {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                       <button className="view__more pointer btn">View More</button>
                   </div> */}
                </div>
            </div>
        </div>
    )
}

export default Project