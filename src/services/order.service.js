const dealsService = require('../services/deals.service');
const axios = require('axios');
const handleXML = require("../utils/jsonToXmlParser");
const url = 'https://bling.com.br/Api/v2/pedido/json/';
const ordersRepository = require('../infra/repositories/order.repository');

require('dotenv').config();

exports.createOrder = async() =>{
    try {
        await ordersRepository.deleteOrders();
        const deals = await dealsService.listDeals();
        const promises = deals.map(async deal => {
            
            const dealToSend = handleXML(deal);
            await axios.post(url, {}, {
                params: {
                  apikey: process.env.BLING_APIKEY,
                  xml: dealToSend,
                },
            })

            const orderObject = {
                descricao: deal.descricao,
                dia: Date(),
                valor: deal.valor
            }
            return await ordersRepository.createOrder(orderObject)
        });
        return Promise.all(promises)
    }catch(error){
        console.log(error)
    }
}