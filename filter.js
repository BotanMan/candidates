'use strict';

// создать класс который будет иметь метод init и вставлять HTML
// по селектору которому будет передоватся и тут же будет происходит
// биндинг событий

// Второй метод будет обработчиком этих событий

function RangeFilter(){}
RangeFilter.prototype.init = function (selector){
    var div = document.createElement('div');
    var input = document.createElement('input');
    var input2 = document.createElement('input');
    input.className = 'from';
    input.addEventListener('click', function(){

    });
    input2.className = 'to';
    div.appendChild(input);
    div.appendChild(input2);
    document.querySelector(selector).innerHTML(div)

};

var filter = (function(){
    document.querySelector().innerHTML();



    var filtersType = {
        'SCORE': 'Score',
        'JS': 'JavaScript',
        'CSS': 'Css'
    };
    var getFilteredStudents = function(array,a,b) {

        var filteredStudents = array.slice(0);
        switch (filtersType) {
            case filtersType.SCORE:
                filteredStudents = filteredStudents.sort(function (a, b) {
                    return a.score > b.score
                });
                break;
            case filtersType.JS:
                filteredStudents = filteredStudents.sort(function (a, b) {
                    return a.javascript > b.javascript
                });
                break;
            case filtersType.CSS:
                filteredStudents = filteredStudents.sort(function (a, b) {
                    return a.css > b.css
                });
                break;
            default:
                break;
        }
        return filteredStudents
    }
}());