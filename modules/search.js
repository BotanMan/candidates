let SearchBar = (function() {
    'use strict';
    class SearchBar extends EventEmitter {
        /*this.Search = function(searchString) {
         var user = new User();

         var search = user.filter(function(searchUser) {
         return searchUser.email === searchString || searchUser.name === searchString;
         });
         }*/

        initFor(selector) {
            let that = this;
            jQuery(selector).html(
                '<span>Search user: </span>' +
                '<div class="search-field"><input class="search-area" type="text" name="search_field" value="" /></div>' +
                '<div class="buttons"><button class="button-search">Search</button></div>'
            );
            var input = jQuery(selector).find('input[name="search_field"]');
            input.on('change', function () {
                that.onChange(input.val());
            });
        }

        onChange(value) {
            let that = this;
            that.emit('change', value);
        }
    }
    return SearchBar;
})();
