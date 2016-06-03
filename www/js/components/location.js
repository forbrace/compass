/**
 * Created by dm on 6/1/16.
 * TODO: Cover with tests
 */
(function () {
    'use strict';

    angular.module('compass')
        .component('compassLocation', {
            templateUrl: 'js/components/location.html',
            controller: CompassLocationController
        })
    ;

    //
    CompassLocationController.$inject = ['$ionicPlatform', '$cordovaGeolocation', '$ionicLoading'];

    function CompassLocationController($ionicPlatform, $cordovaGeolocation, $ionicLoading) {
        var vm = this;

        vm.loading = false;
        vm.type = 'dms';
        vm.setType = setType;
        vm.getType = getType;
        vm.isIOS = $ionicPlatform.is('IOS');
        vm.$onDestroy = $onDestroy;

        function setType(newType) {
            vm.type = newType;
        }

        function getType() {
            return vm.type;
        }

        // Geolocation plugin
        //vm.$onInit = startGelocation;
        vm.startGelocation = startGelocation;

        $ionicPlatform.ready(function(){
            startGelocation();
        });

        function startGelocation() {

            vm.loading = true;
            $ionicLoading.show({
                template: 'Getting location…'
            });

            var posOptions = {timeout: 10000, enableHighAccuracy: true};
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    vm.lat = position.coords.latitude;
                    vm.lng = position.coords.longitude;

                    vm.loading = false;
                    $ionicLoading.hide();

                }, function (err) {
                    // error
                    vm.loading = false;
                    $ionicLoading.hide();
                    vm.error = err;
                });


            var watchOptions = {
                timeout: 3000,
                enableHighAccuracy: true // may cause errors if true
            };

            var watch = $cordovaGeolocation.watchPosition(watchOptions);

            watch.then(
                null,
                function (err) {
                    // error
                    vm.error = err;
                    vm.loading = false;
                    $ionicLoading.hide();
                },
                function (position) {
                    vm.lat = position.coords.latitude;
                    vm.lng = position.coords.longitude;

                    vm.loading = false;
                    $ionicLoading.hide();

                });


            //watch.clearWatch();
        }

        function $onDestroy() {
            watch.clearWatch();
        }

    }

}());
