import React from "react";

import "./styles.css";

interface IProps {
    high: Number,
    low: Number,
    vol: Number,
    last: Number,
    buy: Number,
    sell: Number,
    date?: Number,
    coin: String,
}

const CoinCard: React.FC<IProps> = ({ high, low, vol, last, buy, sell, date, coin }) => {
    return (
        <div id="card-coin-container">
            <div className="card-header">
                <strong>{coin}</strong>
                <div className="date">
                        <strong>Date:</strong>
                        <span>{date}</span>
                    </div>
            </div>
            <div className="card-main">
                <div className="card-main-left">
                    <div className="high">
                        <strong>High:</strong>
                        <span>{high}</span>
                    </div>

                    <div className="low">
                        <strong>Low:</strong>
                        <span>{low}</span>
                    </div>

                    <div className="volume">
                        <strong>Volume</strong>
                        <span>{vol}</span>
                    </div>
                </div>

                <div className="card-main-right">
                    <div className="high">
                        <strong>Last:</strong>
                        <span>{last}</span>
                    </div>

                    <div className="buy">
                        <strong>Buy</strong>
                        <span>{buy}</span>
                    </div>

                    <div className="sell">
                        <strong>Sell</strong>
                        <span>{sell}</span>
                    </div>                
                </div>
            </div>
            <div className="card-footer"></div>
        </div>
    );
}

export default CoinCard;
