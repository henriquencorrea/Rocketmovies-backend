const AppError = require("../utils/AppError")

class UsersControllers {
  create(request, response ) {
    const { name, email, password } = request.body;

    if(!name){
      throw new AppError("Name is required!")
    }

    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersControllers;