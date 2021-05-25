import React from "react";
import Card from "react-bootstrap/Card";


function card() {
  return (
        <div>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rachit Gupta</span>
            from <span className="purple"> Gwalior,India.</span>
            <br />
            
            I am <span className="purple">Computer Science Engineer </span> from <span className="purple">Malaviya National Institute of Technology</span>.</p>
        <br />
        
        <p>
            I have a passion of Devoloping new <span className="purple">user-friendly,accessible and responsive websites</span>.
            <br/>
            I am passionate about using <span className="purple">javascript</span> to create awesome user experince.
        </p>
         
           </blockquote>
           </div>
         
  
      
  );
}

export default card;