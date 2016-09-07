/**
 * Created by Pouin on 03.09.2016.
 */
var source = document.getElementById('users-template').innerHTML;
var template = Handlebars.compile(source);

let bots = User.getBots();

var data = {
  users: bots,
};

var html = template(data);
document.getElementById('users').innerHTML = html;
