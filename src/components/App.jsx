import "./App.scss";
import { Data } from "./Data";
import logo from "../assets/images/logo.svg";

export const App = () => {
    let highestAmount = 0

    Data.forEach((data) => {
        highestAmount = highestAmount < data.amount ? data.amount : highestAmount
    })

    return (
        <>
            <div id="container">
                <div id="my-balance">
                    <h1>My balance</h1>
                    <h1>$921.48</h1>
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>

                <div id="main-section">
                    <h2>Spending - Last 7 days</h2>
                    <ul>
                        {Data.map((data, index) => {
                            const chartHeight = (data.amount / highestAmount * 9) + 3 + "rem"

                            return (
                                <li key={index}>
                                    <div className={highestAmount === data.amount ? "chart max" : "chart"}>
                                        <div style={{"height" : chartHeight}}>
                                            <p className="amount">{"$" + data.amount}</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <p className="title">{data.day}</p>
                                </li>
                            )
                        })}
                    </ul>

                    <hr />

                    <div className="result">
                        <p>Total this month</p>
                        <p>$478.33</p>
                        <p>+2.4%</p>
                        <p>from last month</p>
                    </div>
                </div>
            </div> 

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/NhanPhamTrong  ">Your Name Here</a>.
            </div>
        </>
    )
}