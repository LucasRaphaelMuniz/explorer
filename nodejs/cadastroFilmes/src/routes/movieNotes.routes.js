const { Router } = require("express");

const movieNotesRoutes = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const MovieNotesController = require("../controllers/MovieNotesController");

const movieNotesController = new MovieNotesController();

movieNotesRoutes.use(ensureAuthenticated);


movieNotesRoutes.get("/", movieNotesController.index);
movieNotesRoutes.post("/", movieNotesController.create);
movieNotesRoutes.get("/:id", movieNotesController.show);
movieNotesRoutes.delete("/:id", movieNotesController.delete);

module.exports = movieNotesRoutes;
