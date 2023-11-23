const connection = require("./connection");
const crypto = require("crypto");

const getAll = async (request, response) => {
  try {
    const salt = "9c282cb9f4bdba9b65a3c68e11e6d0ee";

    const hashed = crypto
      .pbkdf2Sync(request.body.senha, salt, 10000, 64, "sha512")
      .toString("hex");

    const login = await connection.execute(
      `SELECT * FROM admin WHERE login = '${request.body.login}' and senha = '${hashed}'`
    );

    if (login[0].length > 0)
      return response.status(200).send(request.body);
    

    return response.status(404).send("Dados de login incorretos!");
  } catch (ex) {
    console.error(ex);
    return response.status(500).send("Internal Error!");
  }
};

module.exports = {
  getAll,
};
