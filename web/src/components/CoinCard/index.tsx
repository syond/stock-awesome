import React from "react";

import "./styles.css";

const CoinCard: React.FC = () => {
    return (
        <div id="card-coin-container">
            <div className="card-header">
                <strong>Bitcoint (BTC)</strong>
                <div className="date">
                        <strong>Date:</strong>
                        <span>1502977646</span>
                    </div>
            </div>
            <div className="card-main">
                <div className="card-main-left">
                    <div className="high">
                        <strong>High:</strong>
                        <span>14481.47000000</span>
                    </div>

                    <div className="low">
                        <strong>Low:</strong>
                        <span>13706.00002000</span>
                    </div>

                    <div className="volume">
                        <strong>Volume</strong>
                        <span>443.73564488</span>
                    </div>
                </div>

                <div className="card-main-right">
                    <div className="high">
                        <strong>Last:</strong>
                        <span>14447.01000000</span>
                    </div>

                    <div className="buy">
                        <strong>Buy</strong>
                        <span>14447.00100000</span>
                    </div>

                    <div className="sell">
                        <strong>Sell</strong>
                        <span>14447.01000000</span>
                    </div>                
                </div>
            </div>
            <div className="card-footer"></div>
        </div>
    );
}

export default CoinCard;
