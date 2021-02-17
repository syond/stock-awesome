import { useState, useEffect } from "react";

import { requestOrderBook } from "../../services/api";

import "./styles.css";

import Layout from "../../components/Layout";
import Main from "../../components/Main";
import CoinCard from "../../components/CoinCard";

interface IGetOrderBook {
    asks: Array<Number>,
    bids: Array<Number>,
    timestamp: Number,
}

const Home = () => {
    const [orderBook, setorderBook] = useState<IGetOrderBook>();

    useEffect(() => {
        async function getOrderBook() {
            const response = await requestOrderBook();

            setorderBook(response.data);
        }
        getOrderBook();
    }, [orderBook])

    return (
        <Layout>
            <Main>
                <div id="home-container">
                    <h1>Market</h1>
                    <div className="content">
                        <ul className="card-grid-template">
                            <li><CoinCard /></li>
                            <li><CoinCard /></li>
                            <li><CoinCard /></li>
                            <li><CoinCard /></li>
                            <li><CoinCard /></li>
                            <li><CoinCard /></li>
                            <li><CoinCard /></li>
                            <li><CoinCard /></li>
                            <li><CoinCard /></li>
                        </ul>
                    </div>
                </div>
            </Main>
        </Layout>
    );
}

export default Home;
