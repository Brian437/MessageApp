
//*
//Message = new Mongo.Collection('message');
var mongo = require('mocha-mongo')('mongodb://localhost');
//var Message = mongoose.model('Message');

var assert = require('assert');

//The test is in try catch to prevent it from craching while not running test.
try
{
	describe('Array', function() {
	  describe('#indexOf()', function() {
	    it('should return -1 when the value is not present', function() {
	      assert.equal(-1, [1,2,3].indexOf(4));
	    });
	    it('data read test', function() {
	      assert.equal(0, [1,2,3].indexOf(1));
	    });
	  });

	});
}
catch(ex)
{

}

//*/