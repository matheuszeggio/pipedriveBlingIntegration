
const orderService = require('../services/order.service');
const ordersRepository = require('../infra/repositories/order.repository');


module.exports = app =>{
    
    app.get('/order', async(req, res) => {
        const orders = await ordersRepository.listOrders();
        res.send(orders).status(200);
    })

    app.put('/order', async (req, res) => {
        const orders = await orderService.createOrder();
        res.send(orders).status(204);
    });
}