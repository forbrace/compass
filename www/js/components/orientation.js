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

        //vm.magneticHeading = 0;
        //cardinalDirection();
        //vm.orientation = true;

        // Device Orientation plugin

        $ionicPlatform.ready(function(){
            startOrientation();
        });

        function startOrientation() {

            $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {

                vm.orientation = true;

                vm.magneticHeading = result.magneticHeading;
                vm.trueHeading = result.trueHeading;
                vm.accuracy = result.headingAccuracy;
                vm.timeStamp = result.timestamp;

                cardinalDirection();
            }, function(err) {
                // An error occurred
                vm.orientation = false;
            });



            var options = {
                frequency: 3000,
                filter: true     // if frequency is set, filter is ignored
            };

            var watch = $cordovaDeviceOrientation.watchHeading(options).then(
                null,
                function(error) {
                    // An error occurred
                    vm.orientation = false;
                },
                function(result) {   // updates constantly (depending on frequency value)

                    vm.orientation = true;

                    vm.magneticHeading = result.magneticHeading;
                    vm.trueHeading = result.trueHeading;
                    vm.accuracy = result.headingAccuracy;
                    vm.timeStamp = result.timestamp;
                    cardinalDirection();
                });

        }

        function cardinalDirection() {
            var SECTOR = 360 / 8; // = 45
            var HALF_SECTOR = SECTOR / 2; // = 22.5

            // 337.5 - 360 && 0 - 22.5
            var isN = (vm.magneticHeading >= 360 - HALF_SECTOR && vm.magneticHeading <= 360) ||
                (vm.magneticHeading >= 0 && vm.magneticHeading < HALF_SECTOR);
            // 22.5 - 67.5
            var isNE = vm.magneticHeading >= HALF_SECTOR && vm.magneticHeading < HALF_SECTOR + SECTOR;
            // 67.5 - 112.5
            var isE = vm.magneticHeading >= HALF_SECTOR + SECTOR && vm.magneticHeading < HALF_SECTOR + SECTOR * 2;
            // 112.5 - 157.5
            var isSE = vm.magneticHeading >= HALF_SECTOR + SECTOR * 2 && vm.magneticHeading < HALF_SECTOR + SECTOR * 3;
            // 157.5 - 202.5
            var isS = vm.magneticHeading >= HALF_SECTOR + SECTOR * 3 && vm.magneticHeading < HALF_SECTOR + SECTOR * 4;
            // 202.5 - 247.5
            var isSW = vm.magneticHeading >= HALF_SECTOR + SECTOR * 4 && vm.magneticHeading < HALF_SECTOR + SECTOR * 5;
            // 247.5 - 292.5
            var isW = vm.magneticHeading >= HALF_SECTOR + SECTOR * 5 && vm.magneticHeading < HALF_SECTOR + SECTOR * 6;
            // 292.5 - 337.5
            var isNW = vm.magneticHeading >= HALF_SECTOR + SECTOR * 6 && vm.magneticHeading < HALF_SECTOR + SECTOR * 7;

            if(isN) {
                vm.cardinalDirection = 'N';
            } else if(isNE) {
                vm.cardinalDirection = 'NE';
            } else if(isE) {
                vm.cardinalDirection = 'E';
            } else if(isSE) {
                vm.cardinalDirection = 'SE';
            } else if(isS) {
                vm.cardinalDirection = 'S';
            } else if(isSW) {
                vm.cardinalDirection = 'SW';
            } else if(isW) {
                vm.cardinalDirection = 'W';
            } else if(isNW) {
                vm.cardinalDirection = 'NW';
            }
        }

        function $onDestroy() {
            watch.clearWatch();
        }

    }

}());
