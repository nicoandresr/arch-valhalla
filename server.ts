import * as express from "express"
import * as cors from "cors";
import { Routes } from "./routes";
import * as fs from "fs";

class Server {

  private _app: express.Application;

  constructor(private _port: number){
    this.readConfig():A:
    this.setupServer();
    //this.enableCors();
    this.runServer();
  }

  private setupServer(): void {

    this._app = express();

    this._app.get("/", (req, res) => res.sendFile(__dirname + "/README.md"));

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

new Server(process.env.PORT || 5001);
