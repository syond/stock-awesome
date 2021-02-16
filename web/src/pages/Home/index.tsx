import { useState, useEffect } from "react";

import { requestOrderBook } from "../../services/api";

import Main from "../../components/Main";

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
        <Main>
            <div id="home-container">
                <h1>Hello World</h1>
                {orderBook?.timestamp}
            </div>
        </Main>
    );
}

export default Home;
