const connection = require("./connection");

const getAll = async (request, response) => {
  try {
    const clientes = await connection.execute(`SELECT * FROM clientes`);
    response.status(200).send(clientes);
  } catch (ex) {
    console.error(ex);
    return response
      .status(500)
      .send("Ocorreu um erro interno ao buscar clientes.");
  }
};

const postCliente = (request, response) => {
  try {
    connection.execute(
      `INSERT INTO clientes(nome, telefone, cep, mensalidade) 
	  VALUES ('${request.body.nome}', '${request.body.telefone}', '${request.body.cep}', ${request.body.mensalidade})`
    );

    return response.status(200).send("Cliente inserido com sucesso!");
  } catch (ex) {
    console.error(ex);
    return response
      .status(500)
      .send("Ocorreu um erro interno ao inserir um novo cliente.");
  }
};

module.exports = {
  getAll,
  postCliente,
};
