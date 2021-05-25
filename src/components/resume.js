import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";
import Button from "react-bootstrap/Button";

function Resume(){
    return (
      <div class='light1' >
       	
      <div id="stars" />
			<div id="stars2" />
			<div id="stars3" /> 
      <section id="resume" class="" style={{padding:"100px",color:"#fff"}}>
        <Container>
            <Row>
              <Col> 
               <h3 className="resume-title">Education</h3>
               <div className="resume-item">
                 <h5 class='resume-h5' > Malaviya National Institute Of Technology(CSE)</h5>
                 <ul>
                   <li>
                     College
                   </li>
                   <li>
                     2018-present
                   </li>
                   <li>
                     CGPA-7.7
                   </li>
                 </ul>
               </div>
               <div className="resume-item">
               <h5 class='resume-h5'> Silver Bells School</h5>
                  <ul>
                   <li> 
                     12th Board
                     </li>
                     <li>
                       2016-2018
                     </li>
                     <li>
                       Percentage:89.2
                     </li>
                  </ul>
               </div>
               <div className="resume-item">
                 <h5 class='resume-h5'>Gwalior Glory High School</h5>
                 <ul>
                   <li>
                      10th Board
                   </li>
                   <li>
                     2015-2016
                   </li>
                   <li>
                     CGPA:9.6
                   </li>
                 </ul>
               </div>
             </Col>
             <Col>
               <h3 className="resume-title">Projects</h3>
               <div className="resume-item">
               <h5 class='resume-h5' > Movie App</h5>
                 <ul>
                   <li>
                   This is Website which contains information about movies of any language.This website also contains information about which movies are trending ,popular,upcoming. You can also search about any movie you want.
                   </li>
                   <li>
                   <Button variant="primary" href='http://quiet-shore-10320.herokuapp.com/' target="_blank">
                         <BiLinkExternal /> &nbsp;
                         View Project 
                    </Button>
                   </li>
                 </ul>
                 </div>
                 <div className="resume-item">
                 <h5 class='resume-h5' >Blog Site</h5>
                 <ul>
                   <li>
                   A basic blog website with create, read, edit and delete blog features.
                   </li>
                   <li>
                   Tech: HTML, CSS, Javascript, Bootstrap, Node JS, Express, MongoDB.
                   </li>
                 </ul>
                 </div>
               </Col>
           </Row>
       </Container>
    </section>
    <section class="light3" id="s7">
      Developed by Rachit Gupta
    </section>
  </div>
 )
}
export default Resume;