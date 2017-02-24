import {JobsService} from "../services/JobsService";

export class JobsModel {
    public static $inject: Array<string> = ["JobsService"];
   
    constructor(jobsService: JobsService) {
     
    }
}
