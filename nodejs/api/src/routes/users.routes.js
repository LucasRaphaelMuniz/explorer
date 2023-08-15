const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

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