import * as express from "express";

export class Routes {

    constructor() {
        let router = express.Router();

        router.get("/", (req, res) => res.send("hola desde router"));

        return router;
    }
}
