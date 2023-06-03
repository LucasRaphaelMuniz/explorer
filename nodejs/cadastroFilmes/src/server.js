
require("express-async-errors");

const AppError = require("./utils/AppError");
const express = require("express");
const uploadConfig = require("./configs/upload");

const routes = require("./routes");
const migrationsRun = require("./database/sqlite/migrations");

const app = express();
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

migrationsRun();

app.use(express.json());
app.use(routes);

app.use((error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }

    console.error(error);

    return res.status(500).json({
        status: "error",
        message: "Internet server error",
    });
});



const PORT = 3333;
app.listen(PORT, () => console.log(`Serve is running on Port ${PORT}`))