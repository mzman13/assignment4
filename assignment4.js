// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

function showSuggestions(str){
	// var xhttp;
	if(str.length == 0){
		document.getElementById("suggestions").innerHTML = "nothing";
	}
	// xhttp = new XMLHttpRequest();
	// xhttp.onreadystatechange = function(){

	// 	if(this.readyState == 4 && this.status == 200){
	// 		var json = JSON.parse(xhttp.responseText);
	// 		document.getElementById("txtHint").innerHTML = json.interests;
	// 	}
	// };

	// xhttp.open("GET", "http://www.mattbowytz.com/simple_api.json?data="+str, true);
	// xhttp.send();

	$.ajax({
		type: 'GET',
		url: "http://www.mattbowytz.com/simple_api.json?data=all",
		async: true,
		dataType: 'json',
		success: function(result){
			var values = [];
			var suggestion = "";
			var suggestions = $('#suggestions');
			$.each(result.data, function(key, value){
				//console.log(key + ' is ' + value);
				$.each(value, function(key, value){
					//console.log(value);
					if(value.startsWith(str)){
						suggestion += values;
						console.log(value);
						suggestions.append(value);
					}
				})
			})

			suggestions.empty();
			
		}
	});

}

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
})();
