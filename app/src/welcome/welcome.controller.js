/**
 * @ngdoc controller
 * @name app.welcome.controller:Welcome
 * @description Welcome controller which typically is useless and you are going to delete it
 */

(function () {

    'use strict';

    angular.module('app.welcome')
        .controller('Welcome', Welcome);

    /* @ngInject */
    function Welcome() {
        var vm = this;

        vm.controls = false;

        vm.data = {
            images: [{
                    "src": "http://lorempixel.com/1200/400/",
                    "caption": "test pic 1"
                },
                {
                    "src": "http://lorempixel.com/1200/401/",
                    "caption": "test pic 2"
            },
                {
                    "src": "http://lorempixel.com/1200/402/",
                    "caption": "test pic 3"
            }

          ]
        }

        vm.welcomeMessage = 'ZE GENGO !';
        vm.testFunction = testFunction;

        /////////////////////

        /**
         * @ngdoc method
         * @name testFunction
         * @param {number} num number is the number of the number
         * @methodOf app.welcome.controller:Welcome
         * @description
         * My Description rules
         */

        function testFunction(num) {
            console.info('This is a test function number ' + num);
        }
    }

}());