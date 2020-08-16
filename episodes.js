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

function getid(episode_url)
{
	// TODO
	return null;
}

function libsynEmbed(id)
{
	// let's make that embed code!
	// <iframe 
	frame = document.createElement("iframe");
	// 	style="border: none" 
	frame.setAttribute("style", "border: none");
	// 	src="//html5-player.libsyn.com/embed/episode/id/15155606/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/"
	var src = "//html5-player.libsyn.com/embed/episode/id/"
	        + id
	        + "height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/"; 
	//  height="90" 
	frame.setAttribute("src", src);
	//  width="100%" 
	frame.setAttribute("width", "100%");
	//  scrolling="no"  
	frame.setAttribute("scrolling", "no");
	//  allowfullscreen 
	frame.prop("allowfullscreen", true);
	//  webkitallowfullscreen 
	frame.prop("webkitallowfullscreen", true);
	//  mozallowfullscreen 
	frame.prop("mozallowfullscreen", true);
	//  oallowfullscreen 
	frame.prop("oallowfullscreen", true);
	//  msallowfullscreen>
	frame.prop("msallowfullscreen", true);
	// </iframe>
	return frame;
}

// <item>

// 	<itunes:image href="https://ssl-static.libsyn.com/p/assets/d/e/e/9/dee9ef7f4ebfa0fc/IconPNG.png" />
// 	<enclosure length="70403978" type="audio/mpeg" url="https://traffic.libsyn.com/secure/sciencehistory/July_2020_Final2.mp3?dest-id=618721" />
// 	
// </item>

$(document).ready(function() {
	var rss = "https://sciencehistory.libsyn.com/rss";

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

				// create list item 
				var podnode = document.createElement("li");
				// theme according to bootstrap
				podnode.setAttribute("class", "list-group-item");
				// create a bootstrap card
				var card = document.createElement("div");
				card.setAttribute("class", "card border-primary mb-3");
				card.setAttribute("style", "width:80%");
				var cardbody = document.createElement("div");
				cardbody.setAttribute("class", "card-body");
				// set title - parsed from, for example:
				// 	<title>Episode 32. Materials Science: Ainissa Ramirez</title>
				var textnode = document.createElement("h5");
				textnode.setAttribute("class", "card-title");



				// parsed from, for example:
				// 	<link><![CDATA[https://sciencehistory.libsyn.com/episode-32-materials-science-ainissa-ramirez]]></link>
				var link = stripHtml(el.find("link").text());
				var textlink = document.createElement("a");
				textlink.setAttribute("href", link);
				textlink.innerHTML = el.find("title").text();
				textnode.appendChild(textlink);
				// set pubdate - parsed from, for example:
				// 	<pubDate>Sat, 11 Jul 2020 04:00:00 +0000</pubDate>
				var pubdatenode = document.createElement("h6");
				pubdatenode.setAttribute("class", "card-subtitle");
				// duration - parsed from, for example:
				// 	<itunes:duration>48:54</itunes:duration>
				var duration = el.find("itunes\\:duration").text();
				pubdatenode.innerHTML 
					= "📅 "
					+ new Date(el.find("pubDate").text()).toDateString()
					+ " - ⏱️ "
					+ duration;
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
				card.appendChild(cardbody);
				// append card to item
				podnode.appendChild(card);
				// append item to list
				document.getElementById("pods").appendChild(podnode)
			});
	

		}	
	});
	
});