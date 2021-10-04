const lib = require('pipedrive');
require('dotenv').config();
const dealsService = require('../services/deals.service');

module.exports = app =>{
    lib.Configuration.apiToken = process.env.PIPEDRIVE_APIKEY;
    
    app.get('/deals', async(req, resp) => {
        const deals = await dealsService.listDeals();
        resp.send(deals);
    })

    app.put('/deals', async (req, res) => {
        var input = [];
        input.status = 'won';
        const deals =  await lib.DealsController.getAllDeals(input, () => {});
        const savedDeals = await dealsService.createDeal(deals);
        res.send(savedDeals)
    });
}