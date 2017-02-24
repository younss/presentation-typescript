import * as angular from "angular";
import "angular-route";
import {config as routesConfig} from "./configs/routes";
import {HackerNewsContentComponent} from "./components/HNContentComponent";
import {NewsModel} from "./core/models/NewsModel";

import {NewsService} from "./core/services/NewsService";

angular.module("hn.hackernews", ["ngRoute"])
    .service("NewsModel", NewsModel)
    .service("NewsService", NewsService)
    .component("hnPage", new HackerNewsContentComponent())
    .config(routesConfig);
