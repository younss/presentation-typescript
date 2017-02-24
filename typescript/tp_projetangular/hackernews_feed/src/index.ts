import "./modules/application/index";
import "./modules/hackernews/index";
import "./modules/jobs/index";
import * as angular from "angular";
import {module} from 'angular';
// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/hackernews.scss";

angular.module("hn", ["hn.application", "hn.hackernews", "hn.jobs"]);
angular.bootstrap(document, ["hn"], {
    strictDi: true
});