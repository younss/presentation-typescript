config.$inject = ["$routeProvider","$locationProvider"];
export function config($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider): void {
    $routeProvider.when("/", {
        template: "<hn-page></hn-page>"
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
        });
}