/**
 * Created by Pouin on 03.09.2016.
 */
var sourece = document.getElementById("people-template").innerHTML;
var template = Handlebars.compile(sourece);

template({})