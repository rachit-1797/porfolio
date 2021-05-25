import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import pdf from './Resume.pdf'


function About(){
    return (
      
      <section id='about' class='light1'>
        
         <div class="container head">
          <div class="row">
          <div class="col-md-7 col-sm-12">
            <div class="box"><div class="boxh"><img src="https://media-exp1.licdn.com/dms/image/C5603AQGuGY5iAVbhIw/profile-displayphoto-shrink_400_400/0/1621933474308?e=1627516800&v=beta&t=kKyxqo00BAdWu3fhOSgLF1FQwYJsE9Dg24fwpUc5n20"/></div></div>
          </div>

          <div class="col-md-5 col-sm-12">
            <div class="box2">

              <span class="first"> HELLO EVERYONE , I AM</span>
              <br></br>
              <p class="name"> Rachit<br/> Gupta</p>
              <br></br>
         
              <br></br>
              <p class="about">I am <span className="purple">Computer Science Engineer </span> from <span className="purple">Malaviya National Institute of Technology</span>.</p>

              <div class="about2">
              <p>
            I have a passion of Devoloping new <span className="purple">user-friendly,accessible and responsive websites</span>.
            <br/>
            I am passionate about using <span className="purple">javascript</span> to create awesome user experince.
        </p>
              </div>
              <br></br>
            
              <br></br>
              <div class="downloadcv" >


              
                 <a href={pdf} target="_blank" class="btn">Download CV</a> 
              </div>
              <br></br>

            </div>

          </div>
        </div>
</div>
      
      </section>
     
      
      
        
        
    )
}
export default About;