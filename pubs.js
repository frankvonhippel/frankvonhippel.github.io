/* file: pubs.js
 * authored: 15 August 2020
 * author: Max von Hippel
 */

$(document).ready(function() {
	
	document.getElementById("NOJS").outerHTML = "";

	$('.p').flowtype({
 		minimum   : 500,
 		maximum   : 2500,
 		minFont   : 12,
 		maxFont   : 25
	});

	$('.btn').flowtype({
 		minimum   : 500,
 		maximum   : 2500,
 		minFont   : 12,
 		maxFont   : 25
	});

	$('.h1').flowtype({
 		minimum   : 500,
 		maximum   : 2500,
 		minFont   : 12,
 		maxFont   : 25
	});

	$('body').flowtype({
 		minimum   : 500,
 		maximum   : 2500,
 		minFont   : 12,
 		maxFont   : 25
	});

	
});