const clienteModel = require("../model/clienteModel");

const getAll = async (request, response) => {
	try{
		const cliente = await clienteModel.getAll();
		return response.json(cliente);
	}
	catch(ex) {
		console.error(ex);
		return response.status(500).send("Ocorreu um erro interno ao buscar clientes.");
	}
};

const postCliente = async (request, response) => {
	try{
		const cliente = await clienteModel.postClient(request.query);
		return response.json(cliente);
	}
	catch(ex) {
		console.error(ex);
		return response.status(500).send("Ocorreu um erro interno ao inserir um novo cliente.");
	}
}

module.exports = {
	getAll,
	postCliente
};