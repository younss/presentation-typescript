import {NewsModel} from "../core/models/NewsModel";
export class HackerNewsContentComponent implements ng.IComponentOptions {
    public controller: any = HNsContentController;
    public template: string = `
        <div>
            <h2>Welcome to Hacker News With Angular 1.6 and TypeScript</h2>
            <p> This is the Recent Hacker News feed</p>
            <div class="">
                <div class="row " ng-repeat="news in $ctrl.model.news">
                    <div class="col-sm-8">
                        <h3>{{::news.title}}</h3> 
                        <p class="byandlink">by {{::news.by}} <br> <a  target='_blank' href="{{::news.url}}"> click here</a></p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
export class HNsContentController {
    public static $inject: Array<string> = ["NewsModel"];
    constructor(public model: NewsModel) {
    }
}