config.$inject = ["$routeProvider", "$locationProvider"];
export function config($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider): void {
    $routeProvider.when("/jobs", {
        template: "<jobs-page></jobs-page>"
    
    }
    
    );
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
        });
}