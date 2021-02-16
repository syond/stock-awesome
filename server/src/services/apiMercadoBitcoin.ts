import axios from "axios";


interface IRequestTrades {
    since?: Number,
    from?: Number,
    to?: Number,
}


const apiInstance = axios.create({
    baseURL: 'https://www.mercadobitcoin.net/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'api' }
});

const requestTicker = async (coin: String, params?: Object) => {
    const response = await apiInstance.get(`${coin}/ticker`);

    return response;
}

const requestOrderBook = async (coin: String) => {
    const response = await apiInstance.get(`${coin}/orderbook`);

    return response;
}

const requestTrades = async (coin: String, params?: IRequestTrades) => {
    // if(params?.since){
    //     params.from = 0;
    //     params.to = 0;
    // }

    // https://www.mercadobitcoin.net/api/BTC/trades/?since=5700
    // https://www.mercadobitcoin.net/api/BTC/trades/1501871369/
    // https://www.mercadobitcoin.net/api/BTC/trades/1501871369/1501891200/

    const response = await apiInstance.get(`${coin}/trades${params?.since ? "/" + params?.since : ""}${params?.from ? "/" + params.from : ""}${params?.to ? "/" + params.to : ""}`);

    return response;
}

export { requestTicker, requestOrderBook, requestTrades }