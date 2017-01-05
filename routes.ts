import * as express from "express";
import * as request from "request";

export class Routes {

  public config(): express.Router {

    let router = express.Router();

    this.configFish(router);
    this.vimrc(router);

    return router;
  }

  private vimrc(router: express.Router): void {
    router.get("/vimrc/", this.vimrcHandler);
  }

  private configFish(router: express.Router): void {
    router.get("/config-fish/", this.fishHandler);
  }

  private vimrcHandler(req, res): void {
    let url = "https://gist.githubusercontent.com/nicoandresr/3cc03b68d6caa378166ceb9c8d849931/raw/70aa5fd829011f97527276616adc7bcdb72a6457/.vimrc"
    let options = Routes.getRequestOptions(url);
    request(options, (err, response, body) => {
      if (err || response.statusCode !== 200) {
        res.status(response.statusCode).send(response.statusMessage);
        return;
      }

      res.send(body);
    });
  }

  private fishHandler(req, res): void {
    let url = "https://gist.githubusercontent.com/nicoandresr/7171f107b6d3bfa0d23ccf514dd3869d/raw/8430b4667e34c52267d380708ea6ab461dab8dfa/.config.fish";
    let options = Routes.getRequestOptions(url);
    request(options, (err, response, body) => {
      if (err || response.statusCode !== 200) {
        res.status(response.statusCode).send(response.statusMessage);
        return;
      }

      res.send(body);
    });
  }
  
  private handler(req, res, url): void {
    let options = Routes.getRequestOptions(url);
    request(options, (err, response, body) => {
      if (err || response.statusCode !== 200) {
        res.status(response.statusCode).send(response.statusMessage);
        return;
      }

      res.send(body);
    });
  }

  private static getRequestOptions(url: string) {
    return {
      url: url
    };
  }
}
