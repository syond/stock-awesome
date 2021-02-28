import axios from "axios";


interface IRequestTrades {
    since?: Number,
    from?: Number,
    to?: Number,
}

interface IRequestDaySummary {
    year?: Number,
    month?: Number,
    day?: Number,
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
    const response = await apiInstance.get(`${coin}/trades${params?.since ? "/" + params?.since : ""}${params?.from ? "/" + params.from : ""}${params?.to ? "/" + params.to : ""}`);

    return response;
}

const requestDaySummary = async (coin: String, params?: IRequestDaySummary) => {
    const response = await apiInstance.get(`${coin}/day-summary${params?.year ? "/" + params.year : ""}${params?.month ? "/" + params.month : ""}${params?.day ? "/" + params.day : ""}`);

    return response;
}

export { requestTicker, requestOrderBook, requestTrades, requestDaySummary }