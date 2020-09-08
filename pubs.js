/* file: pubs.js
 * authored: 15 August 2020
 * author: Max von Hippel
 */

$(document).ready(function() {
	
	document.getElementById("NOJS").outerHTML = "";

	$('.p').flowtype({
 		minimum   : 500,
 		maximum   : 1200,
 		minFont   : 35,
 		maxFont   : 45
	});

	$('.btn').flowtype({
 		minimum   : 500,
 		maximum   : 1200,
 		minFont   : 35,
 		maxFont   : 45
	});

	$('.h1').flowtype({
 		minimum   : 500,
 		maximum   : 1200,
 		minFont   : 40,
 		maxFont   : 50
	});

	$('body').flowtype({
 		minimum   : 500,
 		maximum   : 1200,
 		minFont   : 30,
 		maxFont   : 40
	});

	
});