// Directive names must be in CamelCase
// Directives are referenced in HTML by kebab-case
// This is because javascript does not suppoert kebab identifiers, and HTMl is case insensitive
// Reference: https://medium.com/@tweededbadger/tutorial-dynamic-data-driven-svg-map-with-angularjs-b112fdec421d
app.directive('bodySvg', ['$compile', function ($compile) {
    return {
        restrict: 'A', // How directive can be used: A - attribute, E - element, C - class, M - comment
        templateUrl: 'img/character_body.svg', // Link to HTML that this directive implements
        scope: true,    
        link: function (scope, element) { // register DOM listeners as well as update the DOM
            var parts = element[0].querySelectorAll('.body_part'); // Get all elements with given class - the SVG has been edited to have this class
            angular.forEach(parts, function (path, key) {
                var part = angular.element(path);
                part.attr("ng-click", `click('${part[0].id}')`); // This adds the ng-click attribute to the element we got above. The function is in the linked controller
                part.attr("ng-mouseover", `hover('${part[0].id}')`);
                $compile(part)(scope);
            })
        }
    }
}]);