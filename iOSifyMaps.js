/*! iOSifyMaps
by Ryan Tvenge
http://ryantvenge.com
GitHub: https://github.com/rtvenge/iOSifyMaps/
*/

Object.prototype.iOSifyMaps = function(){

	var
		userAgent = navigator.userAgent;

	//if iOS device
	if ( userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPad') > 0 || userAgent.indexOf('iPod') > 0) {
		var
			anchors = this;

		for (var i = 0; i < anchors.length; i++) {
			//cache anchor object
			var
				anchor = anchors[i],
				hrefText = anchor.getAttribute('href');
			// if href exists
			if ( hrefText ) {
				//set href to new one
				anchor.href = hrefText.replace(/https?:\/\/maps\.google\.com\/maps\?/, 'http://maps.apple.com/?');
			}
		}
	}

	return this;
};