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
	var suggestions = $('#suggestions');
	var suggestion = "";
	var values = [];
	str = str.toLowerCase();
	suggestions.empty();
	if(str.length == 0){
		suggestions.html("<b>NO SUGGESTIONS</b>");
	}
	else{
		if(values.length != 0){
			console.log("true!!!!!!!!!!!!");
			$.each(values, function(key, value){
				//console.log(value);
				if(value.startsWith(str)){
					suggestion += value;
					
					//console.log(suggestion);
					//suggestions.append(value);
					//suggestions.html(suggestion);
				}
			})
			//console.log(suggestion);
			suggestions.html(suggestion+"<br/>");
			console.log(suggestion+"<br/>");
		}
		else{
			$.ajax({
				type: 'GET',
				url: "http://www.mattbowytz.com/simple_api.json?data=all",
				async: true,
				dataType: 'json',
				success: function(result){
					$.each(result.data, function(key, value){	
						$.each(value, function(key, value){
							values.push(value);
							value = value.toLowerCase();
							if(value.startsWith(str)){
								//suggestion += value;
								suggestions.append("<a href=www.google.com/#q="+value+"</a><br/>");
								console.log(value);
								//suggestions.append(value);
								//suggestions.html(suggestion);
							}
							
						})
					})
				}
			});
		}
	}
	

}
