function getCompiledTemplate(data, template){
  var compiled = Handlebars.compile(template);
  return compiled(data);
}

function updateUsers(selector, users){
  var template = $('#users-template').html();

  var data = {
    users: users
  };

  var compiled = getCompiledTemplate(data, template);

  $(selector).html(compiled);
}



