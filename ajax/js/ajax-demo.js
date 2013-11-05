/* ajax-demo.js
    JavaScript file for our AJAX demo
*/

// URL for simple AJAX request/response demo
// https://courses.washington.edu/info343/ajax/test.php

// URL for "top 1000 songs to hear before you die" dataset on Socrata
// https://opendata.socrata.com/resource/ed74-c6ni.json

// URL for real-time Fire 911 calls in Seattle
// http://data.seattle.gov/resource/kzjm-xkqj.json

// other public datasets available via Socrata:
// https://opendata.socrata.com/    (general)
// https://data.seattle.gov/        (Seattle specific)

// JSONP example
// https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=processJSON&format=json

$(function(){
	//doc is ready manipulation
	$('.call-server-button').click(function(){
		jQuery.getJSON('https://courses.washington.edu/info343/ajax/test.php', 
			function(data){
				$('.server-message').html(data.message);
		});
	});

	jQuery.getJSON('https://opendata.socrata.com/resource/ed74-c6ni.json', renderSongs);
});

function renderSongs(songs) {
	var idx;
	var song;
	var template = $('.template');
	var clonedTemplate;
	var container = $('.songs');

	for (idx = 0; idx < songs.length; ++idx) {
		song = songs[idx];
		clonedTemplate = template.clone();
		clonedTemplate.find('.title').html(song.title);
		clonedTemplate.find('.artist').html(song.artist);

		clonedTemplate.removeClass('template');
		container.append(clonedTemplate);
	}
}



//htmlEncode()
// encodes the passed string of HTML so that it can
// be safely added to a page without being interpreted
// as HTML markup (with potentially harmful effects)
// source: http://stackoverflow.com/questions/1219860/html-encoding-in-javascript-jquery
// parameters:
//  - s (string) value to html-encode
//  - return value (string) encoded HTML value
//
function htmlEncode(s) {
    //create an in-memory div element
    var div = document.createElement('div');
    //append the string to encode as a text node
    div.appendChild(document.createTextNode(s));
    //return the innerHTML property (which will be encoded)
    return div.innerHTML;
} //htmlEncode()