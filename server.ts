import * as express from "express"
import * as cors from "cors";
import { Routes } from "./routes";

class Server {

    private _app: express.Application;

    constructor(port: number){
        this.setupServer();
        this.enableCors();

        this._app.listen(port, () => console.log("Listen on port: "+ port));
    }

    private setupServer(): void {
        this._app = express();

        let routes = new Routes();
        this._app.use("/", routes); 
    }

    private enableCors(): void {
       let options = { origin: "*" };
       this._app.use(cors(options));
    }
}

new Server(process.env.port | 5001);
