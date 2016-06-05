describe('Filter: Convert lat/lng to DMS', function() {

    var dmsFilter;

    beforeEach(function() {
        module('compass');

        inject(function($filter){
            dmsFilter = $filter('coordinateToDms');
        });

    });

    it('should be true', function () {
        expect(true).toBe(true);
    });

    it('should be defined', function () {
        expect(dmsFilter).toBeDefined();
    });

    it('should filter the parameters passed', function(){
        console.log(dmsFilter(-2.419416, 'lat'));

        expect(dmsFilter(0, 'lat')).toBe('0˚00′00″');
        expect(dmsFilter(0, 'lng')).toBe('0˚00′00″');

        // London
        expect(dmsFilter(51.500152, 'lat')).toBe('51˚30′00.55″N');
        expect(dmsFilter(-0.126236, 'lng')).toBe('0˚07′34.45″W');

        // Tokyo
        expect(dmsFilter(35.689487, 'lat')).toBe('35˚41′22.15″N');
        expect(dmsFilter(139.691706, 'lng')).toBe('139˚41′30.14″E');

        // San Francisco
        expect(dmsFilter(37.774929, 'lat')).toBe('37˚46′29.74″N');
        expect(dmsFilter(-122.419416, 'lng')).toBe('122˚25′09.9″W');

        // San Francisco
        expect(dmsFilter(-23.55052, 'lat')).toBe('23˚33′01.87″S');
        expect(dmsFilter(-46.633309, 'lng')).toBe('46˚37′59.91″W');
    });

});
