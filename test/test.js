'use strict';

var expect = require('chai').expect;
var colorFormatConverter = require('../index');

describe('colorFormatConverter', function() {
	describe('verifyFormat', function() {
	    it('should convert HEX to RGB', function() {
	        var result = colorFormatConverter.verifyFormat('ea2291');
	        expect(result).to.equal('rgb(234,34,145)');
	    });

	    it('should convert RGB to HEX', function() {
	        var result = colorFormatConverter.verifyFormat('234,34,145');
	        expect(result).to.equal('EA2291');
	    });

	    // it('should ask user to provide input in proper format', function() {
	    //     var result = colorFormatConverter.verifyFormat('fddf');
	    //     should.exist(err).and.be.an.instanceOf(Error).with.property('message', 'this is an error');;
	    // });
	});
});