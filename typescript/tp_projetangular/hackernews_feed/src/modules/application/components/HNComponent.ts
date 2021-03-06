export class HNComponent implements ng.IComponentOptions {
    public template: string = `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" 
                    class="navbar-toggle collapsed" 
                    data-toggle="collapse" 
                    data-target="#navbar" 
                    aria-expanded="false" 
                    aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">HN Application</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="/" title="Hacker News">Most popular News</a></li>
                        <li><a href="/jobs" title="Hacker Jobs">Jobs</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div ng-view></div>`;
}