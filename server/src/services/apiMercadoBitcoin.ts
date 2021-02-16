import axios from "axios";

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

export { requestTicker, requestOrderBook }