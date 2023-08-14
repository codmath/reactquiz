import { useRef } from "react";

function Start({setUsername}){
    const inputref=useRef();
    const handleClick=()=>{
        inputref.current.value&&setUsername(inputref.current.value);

    }
    return(
        <div className="start">
            <input placeholder="Enter Your Name" className="startName" ref={inputref}></input>
            <button className="startbtn" onClick={handleClick}>Start</button>
        </div>


    )
}
export default Start;