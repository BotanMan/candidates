let SearchBar = (function() {
    'use strict';
    class SearchBar extends EventEmitter {
        /*this.Search = function(searchString) {
         var user = new User();

         var search = user.filter(function(searchUser) {
         return searchUser.email === searchString || searchUser.name === searchString;
         });
         }*/

        constructor(selector){
            super();
            this.initFor(selector)
        }

        initFor(selector) {
            let that = this;
            jQuery(selector).html(
                '<div class="search-field"><input class="search-area" type="text" name="search_field" value="" placeholder="Search user"/></div>' +
                '<div class="buttons"><button class="button-search">Search</button></div>'
            );
            that.$input = jQuery(selector).find('input[name="search_field"]');

            that.$input.on('keyup', function (event) {
              if (that.currentValue !== that.$input.val()) {
                  that.onChange(that.$input.val());
                  that.currentValue = that.$input.val();
              }
            });
        }

        onChange(value) {
            let that = this;
            that.emit('change', value);
        }

        getData(){
            return this.$input.val();
        }

    }
    return SearchBar;
})();
