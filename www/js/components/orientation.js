/**
 * Created by dm on 6/1/16.
 */
(function () {
    'use strict';

    angular.module('compass')
        .component('compassOrientation', {
            templateUrl: 'js/components/orientation.html',
            controller: OrientationController
        })
    ;

    //
    OrientationController.$inject = ['$ionicPlatform', '$cordovaDeviceOrientation'];

    function OrientationController($ionicPlatform, $cordovaDeviceOrientation) {
        var vm = this;
        vm.$onDestroy = $onDestroy;


        // Device Orientation plugin

        $ionicPlatform.ready(function(){
            startOrientation();
        });

        function startOrientation() {

            $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
                vm.magneticHeading = result.magneticHeading;
                vm.trueHeading = result.trueHeading;
                vm.accuracy = result.headingAccuracy;
                vm.timeStamp = result.timestamp;

                cardinalDirection();
            }, function(err) {
                // An error occurred
            });



            var options = {
                frequency: 3000,
                filter: true     // if frequency is set, filter is ignored
            };

            var watch = $cordovaDeviceOrientation.watchHeading(options).then(
                null,
                function(error) {
                    // An error occurred
                },
                function(result) {   // updates constantly (depending on frequency value)
                    vm.magneticHeading = result.magneticHeading;
                    vm.trueHeading = result.trueHeading;
                    vm.accuracy = result.headingAccuracy;
                    vm.timeStamp = result.timestamp;
                    cardinalDirection();
                });

        }

        function cardinalDirection() {
            if(vm.magneticHeading === 0) {
                vm.cardinalDirection = 'N';
            } else if(vm.magneticHeading > 0 && vm.magneticHeading < 90) {
                vm.cardinalDirection = 'NE';
            } else if(vm.magneticHeading === 90) {
                vm.cardinalDirection = 'E';
            } else if(vm.magneticHeading > 90 && vm.magneticHeading < 180) {
                vm.cardinalDirection = 'SE';
            } else if(vm.magneticHeading === 180) {
                vm.cardinalDirection = 'S';
            } else if(vm.magneticHeading > 180 && vm.magneticHeading < 270) {
                vm.cardinalDirection = 'SW';
            } else if(vm.magneticHeading === 270) {
                vm.cardinalDirection = 'W';
            } else if(vm.magneticHeading > 270 && vm.magneticHeading < 360) {
                vm.cardinalDirection = 'NW';
            }
        }

        function $onDestroy() {
            watch.clearWatch();
        }

    }

}());
