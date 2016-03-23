/**
 * @ngdoc directive
 * @name app.common.directive:carousel
 * @scope true
 * @param {object} test test object
 * @restrict E
 *
 * @description < description placeholder >
 *
 */

(function () {

    'use strict';

    angular
        .module('app.common')
        .directive('carousel', carousel);

    /* @ngInject */
    function carousel() {

        return {
            link: link,
            restrict: 'E',
            templateUrl: 'src/common/carousel.html',
            scope: {
                data: '='
            }
        };

        /////////////////////

        function link(scope, elem, attrs) {
            console.info('This is a link function of the directive');
        }
    }

}());