;var RangeFilter = (function(){
    /**
     * Filter constructor
     * @constructor
     */
    class RangeFilter extends EventEmitter{

        /**
         * Function that adding new HTML tags into selector
         * @param selector
         */
        init (selector){
            var div = document.createElement('div');
            var input = document.createElement('input');
            var input2 = document.createElement('input');

            /**
             * Function for append elements
             * @param to
             * @param what
             */
            function appendThis(to,what) {
                to.appendChild(what)
            }
            var that = this;
            div.className = 'filter--area';
            input.className = 'from';
            input.placeholder = 'From';
            input.addEventListener('change', function(){
                that.onChange(input.value,input2.value)
            });
            input2.className = 'to';
            input2.placeholder = 'To';
            input2.addEventListener('change', function(){
                that.onChange(input.value,input2.value)
            });
            appendThis(div,input);
            appendThis(div,input2);
            appendThis(document.querySelector(selector), div);

        }

        /**
         * OnChange function
         * @param from
         * @param to
         */
        onChange (from,to) {
            this.emit('change',{
                from: +from,
                to: +to
            })
        }
    }

    return RangeFilter
}());
