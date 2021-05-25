import React from 'react'
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stars.scss";
import SocialFollow from "./socialmedia"
import Navbar from './Navbar'

export default class Home extends React.Component {
	
    render() {
		return (
			<section id='home'>
			<div className="intro route bg-image background">
				<div id="stars" />
			<div id="stars2" />
			<div id="stars3" /> 
			
            
			
		
			
	
			<div className="intro-content display-table">
			  <div className="table-cell">
				<div className="container">
				  <h1 className="intro-title mb-4">Hello, I am Rachit Gupta</h1>
				  <p className="intro-subtitle">
					<span className="text-slider-items"></span>
					<strong className="text-slider">
					  <Typed
						strings={[
						  "Front End Developer",
						  "Back End Developer",
						  "Software Engineer"
						]}
						typeSpeed={80}
						backDelay={1100}
						backSpeed={30}
						loop
					  />
					</strong>
				  
					<SocialFollow/>



					
					 
				  </p>
				  


				</div>
			  </div>
			</div>
		
		 
		  </div>
		  </section>
		 
		);
	  }
	}
           
        
            
    


