import {News} from "../entities/News";
import {NewsService} from "../services/NewsService";

export class NewsModel {
    public static $inject: Array<string> = ["NewsService"];
    public news: Array<News>;

    constructor(newsService: NewsService) {
       this.news = newsService.getAll();
    }
}
