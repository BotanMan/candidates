;var filter = (function(){
    /**
     * Filter constructor
     * @constructor
     */
    function RangeFilter(){}

    /**
     * Function that adding new HTML tags into selector
     * @param selector
     */
    RangeFilter.prototype.init = function (selector){
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
        input.className = 'from';
        input.addEventListener('change', function(){
            that.onChange(input.value,input2.value)
        });
        input2.className = 'to';
        input2.addEventListener('change', function(){
            that.onChange(input.value,input2.value)
        });
        appendThis(div,input);
        appendThis(div,input2);
        document.querySelector(selector).innerHTML += div;

    };
    /**
     * Get inheritance from EventEmitter
     * @type {EventEmitter}
     */
    RangeFilter.prototype = Object.create(EventEmitter.prototype);
    RangeFilter.prototype.constructor = RangeFilter;
    /**
     * OnChange function
     * @param from
     * @param to
     */
    RangeFilter.prototype.onChange = function (from,to) {
        this.emit('change',{
            from: from,
            to: to
        })
    };
    return RangeFilter
}());