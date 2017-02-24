import {JobsModel} from "../core/models/JobsModel";
export class HNJobsComponent implements ng.IComponentOptions {
    public controller: any = HNJobsComponentController;
    public template: string = `
        <div>
            <h2>Welcome to Hacker News Jobs</h2>
            <p> This is the Recent Hacker News Jobs</p>
            <div class="">
                jobs here..
            </div>
        </div>
    `;
}
export class HNJobsComponentController {
    public static $inject: Array<string> = ["JobsModel"];
    constructor(public model: JobsModel) {
    }
}