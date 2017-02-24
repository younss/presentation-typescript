import * as angular from "angular";

import {HNComponent} from "./components/HNComponent";
angular.module("hn.application", [])
    .component("hnApplication", new HNComponent());