import React, { useEffect, useState } from "react";
function Quiz({
    data,
    setStop,
    setQuestion_number,
    question_number
}){
    //question update on UI by using some logic
    const[questions, setQuestions]=useState(null);
    //answers check by using usestste
    const[selectedAns, setSelectedAns]=useState(null);
    //className updated value
    const[className, setClassName]=useState("answer");
    //fetching of questions  by useEffect
    useEffect(()=>{
        setQuestions(data[question_number-1]);
    }, [data, question_number]);
    const delay=(duration, callback)=>{
        setTimeout(()=>{
            callback();
        }, duration);
    };
    const handleClick=(a)=>{
        setSelectedAns(a);
        setClassName("answer active");
        delay(3000, ()=>setClassName(a.correct? "answer correct" : "answer wrong")
        );
        //code for update the questions on the UI screen.......................................................
        delay(6000, ()=>{
            if(a.correct){
                setQuestion_number((prev)=>prev+1);
                setSelectedAns(null);
            }
            else{
                setStop(true);
            }
        });

    };
    return(
        <div className="quiz">
            <div className="questions">{questions?.questions}</div>
            <div className="answers">
            {questions?.answers.map((a)=>(
                <div className={selectedAns===a? className: "answer"} 
                onClick={()=>handleClick(a)}>{a.text}</div>
            ))}
            </div>
        </div>
    )
}
export default Quiz;