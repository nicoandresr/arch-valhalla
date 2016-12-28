import * as express from "express"
import * as cors from "cors";
import { Routes } from "./routes";

class Server {

    private _app: express.Application;

    constructor(private _port: number){
        this.setupServer();
        this.enableCors();
        this.runServer();
    }

    private setupServer(): void {
        this._app = express();
        
        let routes = new Routes().config();
        this._app.use("/", routes); 
    }

    private enableCors(): void {
       let options = { origin: "*" };
       this._app.use(cors(options));
    }

    private runServer(): void {
        this._app.listen(this._port, () => {
            console.log("Listen on port: " + this._port);
        });
    }
}

new Server(process.env.port || 5001);
