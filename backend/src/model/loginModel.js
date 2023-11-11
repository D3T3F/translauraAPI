const connection = require("./connection");

const getAll = async (senha) => {
	const [login] = await connection.execute(`SELECT * FROM admin WHERE login = '${senha.login}' and senha = '${senha.senha}'`);
	return login;
};

module.exports = {
	getAll
};