function updateUsersTemplate(selector, users){
  var source = $('#users-template').html();
  var template = Handlebars.compile(source);

  var data = {
    users: users
  };

  var html = template(data);
  $(selector).html(html);
}