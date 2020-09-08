/* file: episodes.js
 * authored: 9 August 2020
 * author: Max von Hippel
 *
 * some code adapted from:
 *	- https://www.raymondcamden.com/2015/12/08/parsing-rss-feeds-in-javascript-options
 */

function stripHtml(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

// <item>

// 	<itunes:image href="https://ssl-static.libsyn.com/p/assets/d/e/e/9/dee9ef7f4ebfa0fc/IconPNG.png" />
// 	<enclosure length="70403978" type="audio/mpeg" url="https://traffic.libsyn.com/secure/sciencehistory/July_2020_Final2.mp3?dest-id=618721" />
// 	
// </item>

$(document).ready(function() {
	var rss = "https://sciencehistory.libsyn.com/rss?include-libsyn-metadata=true";

	document.getElementById("NOJS").outerHTML = "";
	
	$.ajax(rss, {
		accepts:{
			xml:"application/rss+xml"
		},
		dataType:"xml",
		success:function(data) {
			$(data).find("item").each(function () {
				var el = $(this);
				
				console.log("------------------------");
				console.log("title      : " + el.find("title").text());
				console.log("id         : " + el.find("libsyn\\:itemId").text());

				// create list item 
				var podnode = document.createElement("li");
				// theme according to bootstrap
				podnode.setAttribute("class", "list-group-item");
				// create a bootstrap card
				var card = document.createElement("div");
				card.setAttribute("class", "card border-primary mb-3");
				card.setAttribute("style", "width:95%");
				var cardbody = document.createElement("div");
				cardbody.setAttribute("class", "card-body");
				cardbody.setAttribute("style", "font-size: 1em");
				// set title - parsed from, for example:
				// 	<title>Episode 32. Materials Science: Ainissa Ramirez</title>
				var textnode = document.createElement("h5");
				textnode.setAttribute("class", "card-title");
				textnode.setAttribute("style", "font-size: 1em");

				var link = stripHtml(el.find("link").text());
				var textlink = document.createElement("a");
				textlink.setAttribute("href", link);
				textlink.innerHTML = el.find("title").text();
				textnode.appendChild(textlink);

				// set pubdate - parsed from, for example:
				var pubdatenode = document.createElement("a");
				pubdatenode.setAttribute("class", "btn btn-disabled");
				pubdatenode.setAttribute("href", "#");
				pubdatenode.setAttribute("role", "button");
				pubdatenode.setAttribute("style", "font-size: 1em");

				var i = document.createElement("i");
				i.setAttribute("class", "icon-cal");
				i.setAttribute("style", "height: 1em; width: 1em");

				pubdatenode.appendChild(i);

				pubdatenode.innerHTML += new Date(el.find("pubDate").text()).toDateString();

				var j = document.createElement("i");
				j.setAttribute("class", "icon-time");
				j.setAttribute("style", "height: 1em; width: 1em");

				pubdatenode.appendChild(j);

				pubdatenode.innerHTML += el.find("itunes\\:duration").text();

				// set description
				var description_text = stripHtml(el.find("description").text());
				var description = document.createElement("p");
				description.innerHTML = description_text;
				description.setAttribute("class", "card-text");
				// append components to card
				cardbody.appendChild(textnode);
				cardbody.appendChild(pubdatenode);
				cardbody.appendChild(document.createElement("br"));
				cardbody.appendChild(description);

				var id = el.find("libsyn\\:itemId").text();

				// var iframe = document.createElement("iframe");
				// cardbody.appendChild(iframe);

				// iframe.setAttribute("style", "border:none");

				cardbody.setAttribute("id", "pod_div_" + id);

				card.appendChild(cardbody);
				// append card to item
				podnode.appendChild(card);
				// append item to list
				document.getElementById("pods").appendChild(podnode);
				
				var _src = "//html5-player.libsyn.com/embed/episode/id/"
						 + id
						 + "/height/90/theme/custom/thumbnail/yes/"
						 + "direction/forward/render-playlist/no/custom-color/000000/";

				// THIS PART IS WORK IN PROGRESS.

				// $('<iframe>')
				//     .attr('src', _src)
				//     .attr('height', 90)
				//     .attr('width', "100%")
				//     .attr('scrolling', "no")
				//     .appendTo('#pod_div_' + id);	

				$('body').flowtype({
			 		minimum   : 500,
			 		maximum   : 1200,
			 		minFont   : 16,
			 		maxFont   : 25,
			 		fontRatio : 30
				});

			});
	

		}	
	});
	
});