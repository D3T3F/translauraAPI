const loginModel = require("../model/loginModel");

const getAll = async (request, response) => {
	try{
		const login = await loginModel.getAll(request.query);
		return response.json(login);
	}
	catch(ex) {
		console.error(ex);
		return response.status(500).send("Internal Error!");
	}
};

module.exports = {
	getAll
};