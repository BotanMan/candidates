/**
 * Created by Pouin on 03.09.2016.
 */
var source = document.getElementById("people-template").innerHTML;
var template = Handlebars.compile(source);

var data = {
	usersCol:[
		{firstName: 'igor', lastName: 'boky', profileImageUrl: 'handlebar/image/userLogo.jpg', phoneNumber: '34-789-9', shortAddress: "Stavropol"}, 
		{firstName: 'andrew', lastName: 'frolov', skillsScore: 300, email: 'gregr',profileImageUrl: 'handlebar/image/userLogo.jpg' } 
		]};

var html = template(data);
document.getElementById('people').innerHTML = html;