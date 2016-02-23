var assert = require('assert'),
    config = require('./../lib/config');


var units = {
        temp: 1,
        wind: 2,
        format: 'us'

    },
    ip = '1101';

var Config = config(units,ip);

describe('Config', function () {
    it('has 3 props', function() {
        assert(Object.keys(Config).length === 3); // check the we have 3 props for this object (easily understandable so I used it)
    });

    it('after construction, 2 props are populated', function() {
    	//var count = 0;
/*
        Object.keys(Config).forEach(function (key) {
            key !== null || key !== '' ? count++ : count;
        });
*/

		assert(Config.ip!='');
		assert(Config.units!=null);

    });

    it('has correct key types', function() {
    	assert(typeof(Config.ip) == 'string' || typeof(Config.units) == 'object');
});
});
