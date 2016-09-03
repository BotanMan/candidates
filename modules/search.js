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
                '<div class="search-field"><input name="search_field" value="" /></div>' +
                '<div class="search-button"><button>Go</button></div>'
            );
            var input = jQuery('input[name="search_field"]');
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