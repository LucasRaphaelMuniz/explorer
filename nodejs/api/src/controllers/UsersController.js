const AppError = require("../utils/AppError");

class UsersController {
  create(req, res) {
    const { name, email, pass} = req.body;

    if (!name) {
      throw new AppError("Nome é obrigatório!")
    }

    res.status(201).json({ name, email, pass});
  }
}

module.exports = UsersController;