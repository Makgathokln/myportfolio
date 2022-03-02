import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome,faBell, faUser, faBed, faUsers, faFolder } from '@fortawesome/free-solid-svg-icons'

function Service(){
    return(
        <div className='service component__space' id="Service">
                <div className="heading">
                    <h1 className="heading">My Awesome Skills</h1>
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
                            <div className="service__box pointer">
                                {/* <div className='icon'> */}
                                {/* <FontAwesomeIcon className='icon' icon={faFolder} size={50} color='#f9004d' /> */}
                                {/* </div> */}
                                <div className="service__meta">
                                    <h1 className="service__text">
                                        Website Development
                                    </h1>

                                    <p className="p service__text p__color">
                                        Html 5
                                    </p>
                                    <p className="p service__text p__color">
                                       CSS 3
                                    </p>
                                    <p className="p service__text p__color">
                                        Bootstrap
                                    </p>

                                    <p className="p service__text p__color">
                                        React Js
                                    </p>
                                    <p className="p service__text p__color">
                                       MVC Core C#
                                    </p>
                                    <p className="p service__text p__color">
                                       MySql and Sql
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col__3">
                            <div className="service__box pointer">
                            {/* <div className='icon'>
                                <FontAwesomeIcon className='icon' icon={faFolder} size={50} color='#f9004d' />
                                </div> */}
                                <div className="service__meta">
                                    <h1 className="service__text">
                                        Mobile Application Dev
                                    </h1>

                                    <p className="p service__text p__color">
                                        React Native
                                    </p>

                                    <p className="p service__text p__color">
                                       Javascript
                                    </p>
                                    <p className="p service__text p__color">
                                       Bootstrap
                                    </p>

                                    <p className="p service__text p__color">
                                       Firebase
                                    </p>
                                    <p className="p service__text p__color">
                                       Github
                                    </p>
                                    <p className="p service__text p__color">
                                       Good Communication
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col__3">
                            <div className="service__box pointer">
                                {/* <div className='icon'>
                                <FontAwesomeIcon className='icon' icon={faFolder} size='50' color='#f9004d' />
                                </div> */}
                                <div className="service__meta" style={{height:220, width:210}}>
                                    <h1 className="service__text">
                                        UI UX Designer
                                    </h1>

                                    <p className="p service__text p__color">
                                        Figma
                                    </p>

                                   

                                    <p className="p service__text p__color">
                                        User interface design
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Service