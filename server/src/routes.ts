import { Router } from "express";

import { requestTicker, requestOrderBook } from "./services/apiMercadoBitcoin";
import request from "request";
import cheerio from 'cheerio';

const routes = Router();

routes.get("/", (req, res) => {
    // request({uri: 'https://finance.yahoo.com/cryptocurrencies'}, (err, response, body) => {
    //     var ch = cheerio.load(body);

    //     const teste = ch('.va(m)').text();
    //     res.send(teste);
    // });

    // res.send(test);

    res.json({ message: "Hello world" });
});

routes.get("/:coin/ticker", async (req, res) => {
    const { coin } = req.params;
    
    try {
        const response = await requestTicker(coin);

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

routes.get("/:coin/orderbook", async (req, res) => {
    const { coin } = req.params;
    
    try {
        const response = await requestOrderBook(coin);

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

export default routes;
