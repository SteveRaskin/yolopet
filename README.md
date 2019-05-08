### About YOLO Pet

YOLO Pet is an application which displays a list of adoptable pets and displays details of a selected pet. The application is a response to front-end engineering challenge from [###].

The challenge:

Develop a web page using HTML/JavaScript/CSS. You can use any of your favorite CSS library (bootstrap, material, etc.). However, you cannot use any JavaScript framework (e.g. angular, react, etc.).

Requirements:

Every day thousands of animals are being adopted, but there are still millions that need a home. YOLO Pet is a new adoption agency that caters to all sorts of animals that need to be adopted and they need your help in creating a pet profile page. Start with designing a Logo for the page.

1. Make a webpage with a scrollable list of pic+name+age rows, but:
	a. There are 10M+ pets
	b. The scroll area should only display/load 20 pets at a time
	NOTE: Scrollable means you can mousewheel/relative scroll and also you can grab the scrollbar to jump to any position.

2. When you click on a row of pet, it should display:
	a. Pet's name
	b. Animal type (e.g. dog, cat, hamster)
	c. Animal gender
	d. Animal age
	e. Animal description
	f. Adoption fee (let's go with $199)

You may create a sample JSON file to replicate a server API response. You should only use plain HTML5 JavaScript API (https://developer.mozilla.org/en-US/docs/Web/API). You may choose any other language of your choice that compiles to JavaScript, e.g. TypeScript, Kotlin JS, ClojureScript, WebAssembly, etc. The rest is in your hands.


============================================================


NOTES:

i) in lieu of displaying the animal's type/species in the detail view, a large, high-rez image is displayed
ii) the pet list can be navigated using the tab key; both 'enter' key and spacebar should select the focused pet for display

iii) re: x-device responsiveness, per 2019.05.04 12p revisions:

	- Phone: the app should be usable in both portrait and landscape. In phone/portrait, netiher (bg) images nor animal age are displayed in the list. In landscape, depending on screen size, both thumbnail images and age are displayed.
	
	- I presently have no tablet on which to test; testing in browser simulator however both portrait and landscape should display scaled versions of the full features.


live demo: http://outtolaunch.com/dev/codesamples/yolopet/index.html