import {News} from "../entities/News";
import * as jquery from "jquery";
export class NewsService {
    private $http: ng.IHttpService;
    public getAll(): Array<News> {
         var returnObj: Array<News> = new Array<News>();
        
         let data:Array<number>=this.callRemoteHNFirebase("topstories.json") ;
         let i:number = 0;
         for( let id of data){
             if(i++>5){
                 break;
             }
              let hn:any= this.callRemoteHNFirebase("item/"+id+".json");
                returnObj.push(new News(hn.id, hn.title,hn.by, hn.url));
         }
         
        
       
        return returnObj;
    }

    private getHNTitle(id:string){

    }

    
    /**
     * Call Hacker News feed
     */
    public callRemoteHNFirebase(target:string){
        let result :any = null;
        jquery.ajaxSetup({
            async: false
            });
             jquery.getJSON( "https://hacker-news.firebaseio.com/v0/"+ target, function( data ) {
           
                 result = data;
            

            });
            return result;
    }
}