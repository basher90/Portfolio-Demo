import { useState } from "react";
import "./works.scss";

export default function Works() {
    const [currentSlide, setCurrentslide] = useState(0);

    const data = [
        {
            id: "1",
            title: "C.R.U.D.",
            desc: "An application I created using, React + Redux, Express, MongoDB, and Material-Ui. ",
            img:"assets/crud.jpg",
        },
        {
            id: "2",
            title: "Social-Networking",
            desc: "This Project was Created using django and Flask  ",
            img:"assets/social.jpg"
        },
        {
            id: "3",
            title: "Login & Registration",
            desc: "In this application, I created a simple login register app using C# .net. ",
            img:"assets/log_reg.jpg",
        },
        {
            id: "4",
            title: "E-Commerce",
            desc: "A simple Demo of a E-commerce page simply using c# and .Net. ",
            img:"assets/commerce.jpg",
        },
    ];

    const handleClick = (way) =>{
        way === "left" ? setCurrentslide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentslide(currentSlide < data.length -1 ?currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map((d)=>(

                
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="" alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="content">
                <div className="arrow left" onClick={()=>handleClick("left")}>
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
                <div className="arrow right" onClick={()=>handleClick()}>
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
                <a href="#contact">
                    <div className="arrow middle">
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
