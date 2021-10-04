const { uuid } = require('uuidv4');
const dealsRepository = require('../infra/repositories/deals.repository');

    
exports.listDeals = async () => {
    try {
        return await dealsRepository.listDeals();
    } catch (error) {
        return console.log(error)
    }
};

exports.createDeal = async (data) => {
    await dealsRepository.deleteDeals();

    const promises = data.data.map(async deal => {
        const dealToSave = {
            descricao: deal.title,
            item: {
                servico: deal.next_activity_subject,
                valorUnidade: deal.value,
                quantidade: deal.activities_count,
            },
            valor: deal.weighted_value,
            parcela: 0,
            cliente: {
                nome: deal.person_name,
            }
        }
        return await dealsRepository.createDeal(dealToSave);
    })
    return Promise.all(promises);
}
