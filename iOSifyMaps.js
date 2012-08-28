(function () {
	var
		userAgent = navigator.userAgent;

	//if iOS device
	if ( userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPad') > 0 || userAgent.indexOf('iPod') > 0) {
		var
			anchors = document.getElementsByTagName('a');

		for (var i = 0; i < anchors.length; i++) {
			//cache anchor object
			var
				hrefText = anchor.getAttribute('href');
			// if href exists
			if ( hrefText ) {
				//set href to new one
				anchors[i].href = hrefText.replace(/https?:\/\/maps.google.com\/maps\?/, 'maps:');
			}
		}
	}
}());