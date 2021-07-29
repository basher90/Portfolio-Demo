import "./contact.scss"
import { useState } from "react";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Contact() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    } 

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            backDelay:1000,
            showCursor: true,
            strings: ["Contact Me!", "Message Me!", "Reach Out To ME!", "Get To Know Me!", "Only One Click Away!", ":)"],
        });
    },[]);

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/handshake.png" alt="" />
            </div>
            <div className="right">
                <h2><span ref={textRef}></span></h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>THANK YOU VERY MUCH! I WILL REPLY ASAP! :)</span>}
                </form>
            </div>
        </div>
    )
}
