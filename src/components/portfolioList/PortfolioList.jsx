import "./portfolioList.scss"

export default function PortfolioList({id, title, active, setSelected}) {
    return (
        <div className={active ? "portfolioList active" : "portfolioList"} onClick={()=>setSelected(id)}>
            {title}
        </div>
    )
}
