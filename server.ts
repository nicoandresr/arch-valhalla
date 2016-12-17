import * as express from "express"

class Server {

    private _app: express.Application;

    constructor(port: number){
        this.setupServer();

        this._app.listen(port);
    }

    private setupServer(): void {
        this._app = express();
        this._app.get("/", (req, res) => res.send("hola mundo"));
    }
}

new Server(process.env.port | 5001);
