import "./Question.css"
import {Link} from "react-router-dom"
import React from "react";

const Question = (props) => {

    const questions = [{ id: 1, question: "What is your name?", hackerrankLink: "https://www.hackerrank.com/challenges/js10-hello-world/tutorial"}];

    return (
        <div className="question-container">
            <div>
                <h1>{questions[0].question}</h1>
                <Link to="/assets/Linux/q1.out" target="_blank" download>Download</Link>
            </div>
        </div>
    );
}   

export default Question;