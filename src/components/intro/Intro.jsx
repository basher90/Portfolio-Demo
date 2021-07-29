import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            backDelay:1000,
            showCursor: true,
            strings: ["Developer", "Designer", "Energetic", "Motivated", "Passionate", "AND", "Nice", ":)"],
        });
    },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Profile.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, My Name is</h2>
                    <h1>Jeffery Hernandez</h1>
                    <h3>
                        Software <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <div className="content">
                        <svg id="more-arrows">
                            <polygon
                                className="arrow-top"
                                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
                            />
                            <polygon
                                className="arrow-middle"
                                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
                            />
                            <polygon
                                className="arrow-bottom"
                                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
                            />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}
