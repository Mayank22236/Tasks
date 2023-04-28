const express = require('express');
const GetPriceService = require('./services/getPrice.service');
const app = express();


app.get('/price', async  (req, res, next) => {
    try {
        const getPriceService = new GetPriceService();
        const price = await getPriceService.getLatestPrice()
        console.log('price', price)
        res.json({ price: price });
    } catch (error) {
        next(error);
    }

});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Invalid call</h1>');
});

app.use((err, req, res, next) => {
    console.log(err)
    res.json(err.message || 'There is error');
})

module.exports = app;