iOSifyMaps.js
=============

JavaScript script that changes Google Maps formatted links to iOS formatted links only on iOS devices.

What it does
------------

* Checks for an iOS Device via User Agent String (checks for iPhone, iPod and iPad)
* Get's all anchor tags
* Get's href of each anchor
* Changes url from "maps.google.com" to "maps:"

	<script type="text/javascript" src="iOSifyMaps.js"></script>