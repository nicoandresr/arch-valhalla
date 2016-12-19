import * as express from "express";
import * as request from "request";

export class Routes {

    public config(): express.Router {
        
        let router = express.Router();

        this.configFish(router);

        return router;
    }

    private configFish(router: express.Router): void {
        router.get("/get/config-fish/", this.configFishHandler);
    }

    private configFishHandler(req, res): void {
        let url = "https://gist.githubusercontent.com/nicoandresr/7171f107b6d3bfa0d23ccf514dd3869d/raw/8430b4667e34c52267d380708ea6ab461dab8dfa/.config.fish";
        let options = this.getRequestOptions(url);
        request(options, (err, response, body) => {
            if (err || response.statusCode !== 200) {
                res.status(response.statusCode).send(response.statusMessage);
                return;
            }

            res.send(JSON.parse(body));
        });
    }

    private getRequestOptions(url: string) {
        return {
            url: url
        };
    }
}
