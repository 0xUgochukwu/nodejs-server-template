import express from "express";
import logger from "morgan";


import * as config from "./config/index";
import './utils/db';

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";
import { onError } from "./utils/serverErrorHandler";




const app = express();


// Express config
app.use(logger("dev"));
app.use(express.json());

// Routes
import { index } from "./routes/index";
import post from "./routes/post.route";

app.use("/", index);
app.use("/posts", post);

app.use(errorNotFoundHandler);
app.use(errorHandler);


const server = app.listen(config.PORT || 5000, () => {
    const addr = server.address();
    const bind =
        typeof addr === "string" ? `pipe ${addr}` : `port ${addr!.port}`;
    console.log(`Listening on ${bind}`);
});
server.on("error", onError);

