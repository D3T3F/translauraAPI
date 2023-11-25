const connection = require("./connection");

const getAll = async (request, response) => {
  try {
    const clientes = await connection.execute(
      `SELECT * FROM clientes ORDER BY nome`
    );

    response.status(200).send(clientes[0]);
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
	  VALUES ('${request.body.cliente}', '${request.body.telefone}', '${request.body.cep}', ${request.body.valor})`
    );

    return response.status(200).send("Cliente inserido com sucesso!");
  } catch (ex) {
    console.error(ex);
    return response
      .status(500)
      .send("Ocorreu um erro interno ao inserir um novo cliente.");
  }
};

const deleteCliente = (request, response) => {
  try {
    connection.execute(`DELETE FROM clientes WHERE id = ${request.query.id}`);
    return response.status(200).send("Cliente deletado.");
  } catch (ex) {
    console.error(ex);
    return response
      .status(500)
      .send("Ocorreu um erro interno apagar o clientes.");
  }
};

module.exports = {
  getAll,
  postCliente,
  deleteCliente,
};
