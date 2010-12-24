// =================================
// = Counter Object to count items =
// =================================


var jCounter = function(options) {

	var settings = {
		'startCount' : 0, // What is the starting number, should be pulled from DB
		'slope' : 1.0,  // What is the rate of change of the counter (determined server side hopefully)
		'interval' : 1000, // How often are we updating the counter (milliseconds)
		afterUpdateCallback : function(){
			console.log(currentCount);
		}
	};

	if ( options ) { 
		$.extend( settings, options );
	}

	var afterUpdateCallback = settings.afterUpdateCallback;
	
	var currentCount = settings.startCount;

	var currentIteration = 0.0;

	this.countIt = function(){
		currentCount = Math.ceil((settings.slope * currentIteration) + settings.startCount);
		currentIteration = currentIteration + 1.0;
		settings.afterUpdateCallback(currentCount);
		t = setTimeout("countIt()",settings.interval);
	
	}

	return this;

};

// ====================================
// = Zero Padding function for String =
// ====================================

String.prototype.padWithZeros = function(length){
	var l = this.length;

	// If the string is longer or equal, no need to pad
	if (l >= length)
		return this;
	
	pad_count = (length - l) ;
	numZeropad = ""
	while(numZeropad.length < pad_count) {
		numZeropad = "0" + numZeropad;
	}
	return numZeropad + this;
}
