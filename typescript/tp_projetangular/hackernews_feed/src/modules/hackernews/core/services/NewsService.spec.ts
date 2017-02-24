import {NewsService} from "./NewsService";
import {News} from "../entities/News";
import * as _ from "lodash";
describe("Service: newsService", () => {
    var newsService: NewsService;
    beforeEach(() => {
        newsService = new NewsService();
    });
    describe("on getAll()", () => {
        it("should return 5 newss", () => {
            var res: Array<News> = newsService.getAll();
            expect(res.length).toBe(5);
            _.forEach(res, (news: News) => {
                expect((<any>news.constructor).name).toEqual("news");
            });
        });
    });
});