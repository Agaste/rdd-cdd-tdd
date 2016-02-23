var assert = require('assert'),
    format = require('./../lib/format');

describe('format', function () {
    it('is a constructor of the Format object',function() {
        assert(typeof(format) === 'function'); //check whether format is a function type or not (found on the real test file and easily understandable so I used it)
    });
});
