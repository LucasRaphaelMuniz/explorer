const {Router} = require("express");

const usersRoutes = require("./users.routes");
const movieNotesRoutes = require("./movieNotes.routes");
const movieTagssRoutes = require("./movieTags.routes");
const sessionsRoutes = require("./sessions.routes");


const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/notes", movieNotesRoutes);
routes.use("/tags", movieTagssRoutes);
routes.use("/sessions", sessionsRoutes);


module.exports = routes;