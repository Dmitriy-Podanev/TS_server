import {App} from "../types/app";
import {injectable} from "tsyringe";

@injectable()
export class ConfigServiceJSON implements App.Config.Service {
    readonly port: number;

    constructor() {
        const data = require("../../config/config.json");
        console.log(data);
        this.port = data.port;
    }

}