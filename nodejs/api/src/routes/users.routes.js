const { Router } = require("express");
const usersRoutes = Router();
const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();


usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;

/*
Exmplo de middleware
function myMiddleware(req, res, next) {
  console.log('passou pelo middleware');

  if(!req.body.isAdmin){
    return res.json( {message: "user unauthorized"});
  }
  next();
}

usersRoutes.use(myMiddleware) // para todas rotas
usersRoutes.post("/", myMiddleware, usersController.create); // para uma rota especifica

*/



// // Route Params, são obrigatórios
// usersRoutes.get("/message/:id/:user", (req, res) => {
//   const {id, user} = req.params
//   res.send(`
//     Message ID: ${id}.
//     For user: ${user}.
//   `);
// })

// // Query Params, são opcionais
// usersRoutes.get("/users", (req, res) => {
//   const { page, limit} = req.query;
//   res.send(`Page: ${page}. Show: ${limit}`);
//   // http://localhost:3333/users?page=30&limit=10
// })