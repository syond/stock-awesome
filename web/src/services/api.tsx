import axios from "axios";

const apiInstance = axios.create({
    baseURL: "http://localhost:3001/",
});


const requestOrderBook = async () => {
    const response = await apiInstance.get("crypto/BTC/orderbook");

    return response;
}

const requestBitcoinTicker = async () => {
    const response = await apiInstance.get("crypto/BTC/ticker/")

    return response;
}

const requestBitcoinCashTicker = async () => {
    const response = await apiInstance.get("crypto/BCH/ticker/")

    return response;
}

const requestEthTicker = async () => {
    const response = await apiInstance.get("crypto/ETH/ticker/")

    return response;
}

const requestLiteCoin = async () => {
    const response = await apiInstance.get("crypto/LTC/ticker/")

    return response;
}

export { 
    requestOrderBook, 
    requestBitcoinTicker,
    requestBitcoinCashTicker,
    requestEthTicker,
    requestLiteCoin
}
