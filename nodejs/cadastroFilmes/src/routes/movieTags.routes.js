const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const movieTagsRoutes = Router();

const MovieTagsController = require("../controllers/MovieTagsController");

const movieTagsController = new MovieTagsController();

movieTagsRoutes.get("/", ensureAuthenticated, movieTagsController.index);


module.exports = movieTagsRoutes;
