import axios from "axios";

const apiInstance = axios.create({
    baseURL: "http://localhost:3001/",
});


const requestOrderBook = async () => {
    const response = await apiInstance.get("crypto/BTC/orderbook");

    return response;
}

export { requestOrderBook }
