/**
 * Created by dm on 6/1/16.
 */
(function () {
    'use strict';

    angular.module('compass')
        .filter('coordinateToDms', coordinateToDms)
    ;

    /*
     * 122˚45‘45“ = 122.7625
     * 122 + 45/60 + 45/3600 = 122.7625
     * */

    function coordinateToDms() {
        return function (coordinate, type) {

            var coord = coordinate;
            var hemisphere = '';

            if (type === 'lat') {
                hemisphere = coord > 0 ? 'N' : 'S';
            }
            if (type === 'lng') {
                hemisphere = coord > 0 ? 'E' : 'W';
            }

            var deg = parseInt(coord);
            var minutes = Math.abs(parseInt(60 * (Math.abs(coord) - Math.abs(deg))));
            var seconds = 3600 * (Math.abs(coord) - Math.abs(deg) - Math.abs(minutes) / 60);

            return parseInt(coord) + '˚' + minutes + '′' + Math.round(seconds * 100) / 100 + '″' + hemisphere;

        }
    }

}());
