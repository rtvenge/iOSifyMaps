iOSifyMaps.js
=============

JavaScript script that changes Google Maps formatted links to iOS formatted links only on iOS devices.

What it does
------------

* Checks for an iOS Device via User Agent String (checks for iPhone, iPod and iPad)
* Get's all anchor tags
* Get's href of each anchor
* Changes url from "maps.google.com" to "maps:"

How to Implements
-----------------

1. Place &lt;script type="text/javascript" src="iOSifyMaps.js"&gt;&lt;/script&gt; tag referring to js file right BEFORE &lt;/body&gt; tag1. Place &lt;script type="text/javascript" src="iOSifyMaps.js"&gt;&lt;/script&gt; tag referring to js file right BEFORE &lt;/body&gt; tag
1. Place &lt;script type="text/javascript" src="iOSifyMaps.js"&gt;&lt;/script&gt; tag referring to js file right BEFORE &lt;/body&gt; tag
2. Use the following JavaScript after including this JS file:
&lt;script&gt;document.getElementsByTagName('a').iOSifyMaps();&lt;/script&lg;
3. For more efficient JS, add an id to the targeted element and use getElementByID:
&lt;script&gt;document.getElementByID('mapsLink').iOSifyMaps();&lt;/script&lg;