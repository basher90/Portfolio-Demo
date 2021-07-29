import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, crudPortfolio, socialNetPortfolio, loginRegPortfolio, eCommercePortfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "crud",
            title: "C.R.U.D.",
        },
        {
            id: "socialApp",
            title: "Social-networking App",
        },
        {
            id: "login",
            title: "Login & Registration App",
        },
        {
            id: "design",
            title: "E-Commerce Design",
        },
    ];

    useEffect(() =>{
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "crud":
                setData(crudPortfolio);
                break;
            case "socialApp":
                setData(socialNetPortfolio);
                break;
            case "login":
                setData(loginRegPortfolio);
                break;
            case "design":
                setData(eCommercePortfolio);
                break;
                default:
                    setData(featuredPortfolio);
        }

    },[selected])


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(

                <div className="item">
                    <img 
                        src={d.img} 
                        alt="" 
                    />
                <h3>{d.title}</h3>
            </div>
            ))}
        </div>     
    </div>
    );
}
