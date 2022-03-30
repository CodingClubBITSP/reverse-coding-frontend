import React, {useEffect} from "react";
import "./Accordion.css";
import Winques from './Windows_question.json'
import LMques from './Linux&Mac_Question.json'
import {Link, NavLink} from "react-router-dom"
import Latex from "react-latex";
import image from "./cclogo.jpg";

const Accordion = (OS) => {
  const logout = () => {
    localStorage.clear();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);

  if (OS.location.pathname == "/linux") {
    var loc = "Linux/"
    var file = LMques
    console.log(loc)
  }
  else if (OS.location.pathname == "/macos") {
    var loc = "Macos/"
    var file = LMques
    console.log(loc)
  } else {
    var loc = "Windows/"
    var file = Winques
    console.log(loc)
  }


  
  return (localStorage.getItem("email") === null ) ? (
    <div style={{marginTop:"20vh", backgroundColor: "black", fontFamily:"Helvetica"}}>
      <h1 style={{color:"white"}}>You should be authorized to compete in Reverse Coding. <br></br>Please log in to compete.</h1>
      <div className="accordbuttons">
          
          <NavLink to="/" className='btn backtohomereal backtohome' style={{marginTop:"2rem", alignSelf:"center"}} id="HomeButton">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                Back to Home
          </NavLink>
      </div>
    </div>
  ) : (
    <div className="accordion-js">

      <div style={{textAlign:"center"}} className="questions-title">Ready to reverse the code, { localStorage.getItem("name") }?</div>

      <img src={image}  style={{marginLeft:"40vw"}} />

      
      <div class="row">
        <div class="col">
        <div className="accordbuttons">
              <Link to={{ pathname: "https://docs.google.com/document/d/1BaZVAFCw0ZUW8zvN7_AB706xvcmUFCEHJU6UpJ063Fs/edit?usp=sharing" }} target="_blank" className='btn backtohomereal backtohome instructions' style={{marginTop:"2rem", alignSelf:"right"}} id="HomeButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               Instructions
              </Link>

              <NavLink to="/" className='btn backtohomereal backtohome' style={{marginTop:"2rem", alignSelf:"left"}} id="HomeButton">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    Back to Home
              </NavLink>

              <Link to={{ pathname: "/" }} className='btn backtohomereal backtohome instructions' style={{marginTop:"2rem", alignSelf:"right"}} id="HomeButton" onClick={logout}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               Logout
              </Link>
            </div>
          <div class="tabs">
  
            {
              file.map((questions,key) => (
                <div class="tab">
              <input type="checkbox" id={questions.id} />
              <label class="tab-label" for={questions.id} style={{fontSize:"1.2rem"}}>
              Question {questions.number}
              </label>
              <div class="tab-content">
              <Latex displayMode={false}>{questions.description}</Latex>
                <br/>
                {/* <Link className="download-link" to={"/assets/Windows/"+questions.download} target="_blank" download>Download Link</Link> */}
                <Link className="btn backtohome" to={"/assets/"+loc+questions.download} target="_blank" download>Download Link</Link>
                <br/>
                 <br/>
                
              <a href="#" className='btn backtohome'  id={questions.id} onClick={(e) => {window.open(questions.HRlink)}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               HackerRank
              </a>
              </div>
            </div>
              ))
            }

          </div>
        </div>
        
      </div>
      
      
    
    </div>
  );
};

export default Accordion;
