import { Router } from "express";

import { 
    requestTicker, 
    requestOrderBook, 
    requestTrades, 
    requestDaySummary } from "./services/apiMercadoBitcoin";
import request from "request";
import cheerio from 'cheerio';
import { parse } from "path";

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

routes.get("/crypto/:coin/ticker", async (req, res) => {
    const { coin } = req.params;

    try {
        const response = await requestTicker(coin);

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

routes.get("/crypto/:coin/orderbook", async (req, res) => {
    const { coin } = req.params;

    try {
        const response = await requestOrderBook(coin);

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

routes.get("/crypto/:coin/trades", async (req, res) => {
    const { coin } = req.params;

    try {
        const response = await requestTrades(coin);

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

routes.get("/crypto/:coin/trades/:since", async (req, res) => {
    const { coin, since } = req.params;

    const paramsObj = {
        since: parseInt(since)
    }

    try {
        const response = await requestTrades(coin, paramsObj);

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

routes.get("/crypto/:coin/trades/:from", async (req, res) => {
    const { coin, from } = req.params;

    const paramsObj = {
        from: parseInt(from)
    }

    try {
        const response = await requestTrades(coin, paramsObj);

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

routes.get("/crypto/:coin/trades/:from/:to", async (req, res) => {
    const { coin, from, to } = req.params;

    const paramsObj = {
        from: parseInt(from),
        to: parseInt(to),
    }

    try {
        const response = await requestTrades(coin, paramsObj);

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

routes.get("/crypto/:coin/day-summary/:year/:month/:day", async (req, res) => {
    const { coin, year, month, day } = req.params;

    const paramsObj = {
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day),
    }

    try {
        const response = await requestDaySummary(coin, paramsObj);

        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
});

export default routes;
