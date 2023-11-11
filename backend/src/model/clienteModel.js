const connection = require("./connection");

const getAll = async () => {
	const [cliente] = await connection.execute(`SELECT * FROM clientes`);
	return cliente;
};

const postClient = async (cliente) => {
	const [insert] = await connection.execute(`INSERT INTO clientes(nome, telefone, cep, mensalidade)` +
												`VALUES (${cliente.nome}, ${cliente.telefone}, ${cliente.cep}, ${cliente.mensalidade})`);

	return {insertId: insert.insertId};
}

module.exports = {
	getAll,
	postClient
};