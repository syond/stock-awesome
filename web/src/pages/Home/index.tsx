import { useState, useEffect } from "react";

import { 
    requestOrderBook, 
    requestBitcoinTicker,
    requestBitcoinCashTicker,
    requestEthTicker,
    requestLiteCoin } from "../../services/api";

import "./styles.css";

import Layout from "../../components/Layout";
import Main from "../../components/Main";
import CoinCard from "../../components/CoinCard";

interface IGetOrderBook {
    asks: Array<Number>,
    bids: Array<Number>,
    timestamp: Number,
}

interface IGetTicker {
    high: Number,
    low: Number,
    vol: Number,
    last: Number,
    buy: Number,
    sell: Number,
    date: Number,
}

const Home = () => {
    const [orderBook, setorderBook] = useState<IGetOrderBook>();
    const [bitcoinTicker, setbitcoinTicker] = useState<IGetTicker>();
    const [bitcoinCashTicker, setbitcoinCashTicker] = useState<IGetTicker>();
    const [ethTicker, setethTicker] = useState<IGetTicker>();
    const [ltcTicker, setltcTicker] = useState<IGetTicker>();

    // useEffect(() => {
    //     async function getOrderBook() {
    //         const response = await requestOrderBook();

    //         setorderBook(response.data);
    //     }

    //     getOrderBook();
    // }, [orderBook])

    useEffect(() => {
        async function getBitcoinTicker() {
            const response = await requestBitcoinTicker();

            setbitcoinTicker(response.data.ticker);
        }

        getBitcoinTicker();
    }, []);

    useEffect(() => {
        async function getBitcoinCashTicker() {
            const response = await requestBitcoinCashTicker();

            setbitcoinCashTicker(response.data.ticker);
        }

        getBitcoinCashTicker();
    }, []);

    useEffect(() => {
        async function getEthTicker() {
            const response = await requestEthTicker();

            setethTicker(response.data.ticker);
        }

        getEthTicker();
    }, []);

    useEffect(() => {
        async function getLtcTicker() {
            const response = await requestLiteCoin();

            setltcTicker(response.data.ticker);
        }

        getLtcTicker();
    }, []);

    return (
        <Layout>
            <Main>
                <div id="home-container">
                    <h1>Market</h1>
                    <div className="content">
                        <ul className="card-grid-template">
                            {bitcoinTicker ?
                                <li>
                                    <CoinCard
                                        coin="Bitcoin (BTC)"
                                        buy={bitcoinTicker?.buy}
                                        high={bitcoinTicker?.high}
                                        last={bitcoinTicker?.last}
                                        low={bitcoinTicker?.low}
                                        sell={bitcoinTicker?.sell}
                                        vol={bitcoinTicker?.vol}
                                        date={bitcoinTicker?.date}
                                    />
                                </li>
                                : ""}
                            {bitcoinCashTicker ?
                                <li>
                                    <CoinCard
                                        coin="Bitcoin Cash (BCH)"
                                        buy={bitcoinCashTicker?.buy}
                                        high={bitcoinCashTicker?.high}
                                        last={bitcoinCashTicker?.last}
                                        low={bitcoinCashTicker?.low}
                                        sell={bitcoinCashTicker?.sell}
                                        vol={bitcoinCashTicker?.vol}
                                        date={bitcoinCashTicker?.date}
                                    />
                                </li>
                                : ""}
                            {ethTicker ?
                                <li>
                                    <CoinCard
                                        coin="Ethereum"
                                        buy={ethTicker?.buy}
                                        high={ethTicker?.high}
                                        last={ethTicker?.last}
                                        low={ethTicker?.low}
                                        sell={ethTicker?.sell}
                                        vol={ethTicker?.vol}
                                        date={ethTicker?.date}
                                    />
                                </li>
                                : ""}
                            {ltcTicker ?
                                <li>
                                    <CoinCard
                                        coin="Litecoin"
                                        buy={ltcTicker?.buy}
                                        high={ltcTicker?.high}
                                        last={ltcTicker?.last}
                                        low={ltcTicker?.low}
                                        sell={ltcTicker?.sell}
                                        vol={ltcTicker?.vol}
                                        date={ltcTicker?.date}
                                    />
                                </li>
                                : ""}
                        </ul>
                    </div>
                </div>
            </Main>
        </Layout>
    );
}

export default Home;
