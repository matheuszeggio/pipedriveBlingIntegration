const jsonToXml = require('js2xmlparser').parse;

async function convertToXml(data) {

    const stringID = data._id.toString();
    const order = {
        pedido: [
            {
                id: stringID,
                cliente: {
                nome: data.nome,
                },
                item: {
                    servico: data.item.servico,
                    valorUnidade: data.item.valorUnidade,
                    quantidade: data.item.quantidade
                },
                valor: data.valor,
                parcela: data.parcela,
                descricao: data.descricao
            }
        ],
    };

  return jsonToXml('pedido', order);
}

module.exports = convertToXml;