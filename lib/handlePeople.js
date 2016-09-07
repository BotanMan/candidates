function userInfo(people, usersCol){
		var source = document.getElementById("people-template").innerHTML;
		var template = Handlebars.compile(source);
		return template(source);
		};