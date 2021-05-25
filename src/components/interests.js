import React from 'react'
import Techstack from "./skills"
function Interests(){
    return (
        <section id='intersets'class='light1' style={{padding:"100px"}}>
        
            <div class="text-center">      
            <h1 className="project-heading">
          <strong className="Skills" > Professional Skillset </strong>
        </h1>
        </div>
            <Techstack />
            <p style={{ textAlign: "justify" }}>
            <h3 className="project-heading">
            Apart from coding, some other activities that I love to do!
            </h3>
            </p>
            
        <ul>
            <li>
               I follow man united.
            </li>
            <li>
                I love to explore new Places.
            </li>
            
            
        </ul>
       
        </section>
    )
}
export default Interests;