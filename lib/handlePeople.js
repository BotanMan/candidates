function userInfo(people, users) {
  var source = document.getElementById('users-template').innerHTML;
  var template = Handlebars.compile(source);

	return template(source);
};
