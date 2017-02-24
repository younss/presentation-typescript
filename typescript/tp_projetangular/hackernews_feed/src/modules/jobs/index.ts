import * as angular from "angular";
import "angular-route";
import {config as routesConfig} from "./configs/routes";
import {HNJobsComponent} from "./compontents/HNJobsComponent";
import {JobsModel} from "./core/models/JobsModel";

import {JobsService} from "./core/services/JobsService";

angular.module("hn.jobs", ["ngRoute"])
    .service("JobsModel", JobsModel)
    .service("JobsService", JobsService)
    .component("jobsPage", new HNJobsComponent())
    .config(routesConfig);
