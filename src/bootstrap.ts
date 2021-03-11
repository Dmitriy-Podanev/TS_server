import {container} from "tsyringe";
import {App} from "./types/app";
import {ConfigServiceJSON} from "./service/ConfigServiceJson";
import {Service} from "./enum/service";

// container.register<App.Config.Service>('config',{useClass :ConfigServiceJSON});
container.register<App.Config.Service>(Service.Config,{useClass :ConfigServiceJSON});