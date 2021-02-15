import { Router } from "express";
import request from "request";
import cheerio from 'cheerio';

const routes = Router();

routes.get("/", (req, res) => {
    request({uri: 'https://finance.yahoo.com/cryptocurrencies'}, (err, response, body) => {
        var ch = cheerio.load(body);

        const teste = ch('.va(m)').text();
        res.send(teste);
    });

    // res.send(test);
});

export default routes;
