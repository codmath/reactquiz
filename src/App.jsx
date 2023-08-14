import React, { useEffect, useState } from "react";
import './app.css';
import Quiz from "./quiz.js";
import Timer from "./timer.jsx";
import Start from "./start.js";
function App(){
    //use my API 
    //use state hook for updating the data
    const[question_number, setQuestion_number]=useState(1);
    const[stop, setStop]=useState(false);
    const[earned, setEarned]=useState("$ 0");
    const[username, setUsername]=useState(null);
    const myQues=[
        {id:1, amount:"$ 100"},
        {id:2, amount:"$ 200"},
        {id:3, amount:"$ 300"},
        {id:4, amount:"$ 400"},
        {id:5, amount:"$ 500"},
        {id:6, amount:"$ 600"},
        {id:7, amount:"$ 700"},
        {id:8, amount:"$ 800"},
        {id:9, amount:"$ 900"},
        {id:10, amount:"$ 1000"},
        {id:11, amount:"$ 1200"},
        {id:12, amount:"$ 1300"},
        {id:13, amount:"$ 1400"},
        {id:14, amount:"$ 1500"},
        {id:15, amount:"$ 1600"},
        {id:16, amount:"$ 1700"},
        {id:17, amount:"$ 18800"},
        {id:18, amount:"$ 1000000"},
        {id:19, amount:"$ 100000000"},
        {id:20, amount:"$ 10000000000"}
    ].reverse();
    useEffect(()=>{
        question_number>1&&setEarned(myQues.find((m)=>m.id===question_number-1).amount);
    },[myQues,question_number]);
    const data=[
        {
            id:1,
            questions:"How is an array initialized in C language?",
            answers:[
                {
                    text:"int a[3]={1,2,3}",
                    correct:true,
                },
                {
                    text:"int a(3)={1 2 3}",
                    correct:false,
                },
                {
                    text:"int 3(a)={1,2,3}",
                    correct:false,
                },
                {
                    text:"None of the above",
                    correct:false,
                }
            ], 
        },
        {
            id:2,
            questions:"Which of the following is a linear data structure?",
            answers:[
                {
                    text:"AVL",
                    correct:false,

                },
                {
                    text:"Graph",
                    correct:false,
                },
                {
                    text:"Array",
                    correct:true,
                },
                {
                    text:"binary Tree",
                    correct:false,
                }
            ],


        },

        {
            id:3,
            questions:"How is the 2nd element in an array accessed based on pointer notation?",
            answers:[
                {
                    text:"*a+2",
                    correct:false,

                },
                {
                    text:"*(a+2)",
                    correct:true,
                },
                {
                    text:"*(*a+2)",
                    correct:false,
                },
                {
                    text:"&(a+2)",
                    correct:false,
                }
            ],


        }
        , {
            id:4,
            questions:"Which of the following is not the type of queue?",
            answers:[
                {
                    text:"priority queue",
                    correct:false,

                },
                {
                    text:"single-ended queue",
                    correct:true,
                },
                {
                    text:"circular queue",
                    correct:false,
                },
                {
                    text:"ordinary queue",
                    correct:false,
                }
            ],


        },
        {
        id:5,
        questions:"From following which is not the operation of data structure?",
        answers:[
            {
                text:"operations that manipulate data in some way",
                correct:true,

            },
            {
                text:"operations that performs a computation",
                correct:false,
            },
            {
                text:"operations that check for syntax error",
                correct:false,
            },
            {
                text:"opreations that monitor an object for the occurence of a controlling event",
                correct:false,
            }
        ],


    }



    ]

    return(
        <div div className="app">
        {username?(
            <>
            <div className="main">
            {stop?(<h1 className="Text">You Earned {earned}</h1>):(
                <>
            <div className="top">
                <div className="timer"> <Timer 
                setStop={setStop}
                question_number={question_number} /> </div>
            </div>
            <div className="bottom"><Quiz 
            data={data}
            question_number={question_number}
            setQuestion_number={setQuestion_number}
            setStop={setStop}
            /></div>
            </>
            )}
            </div>
            <div className="pyramid">
            <ul className="moneyLists">
            {myQues.map((m)=> (
                <li className={question_number===m.id?"moneyListItems active":"moneyListItems"}>
                    <span className="questionNumber">{m.id}</span>
                    <span className="price">{m.amount}</span>
                </li>
                ))}
            </ul>
            </div>
            </>
        ):<Start setUsername={setUsername}/>}
            {/* <div className="main">
            {stop?(<h1 className="Text">You Earned {earned}</h1>):(
                <>
            <div className="top">
                <div className="timer"> <Timer 
                setStop={setStop}
                question_number={question_number} /> </div>
            </div>
            <div className="bottom"><Quiz 
            data={data}
            question_number={question_number}
            setQuestion_number={setQuestion_number}
            setStop={setStop}
            /></div>
            </>
            )}
            </div>
            <div className="pyramid">
            <ul className="moneyLists">
            {myQues.map((m)=> (
                <li className={question_number===m.id?"moneyListItems active":"moneyListItems"}>
                    <span className="questionNumber">{m.id}</span>
                    <span className="price">{m.amount}</span>
                </li>
                ))}
            </ul>
            </div> */}
        </div>
    );
}
export default App;