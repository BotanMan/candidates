;var RangeFilter = (function () {
    /**
     * Filter constructor
     * @constructor
     */
    class RangeFilter extends EventEmitter {

        constructor(selector, title, from, to) {
            super();
            this.minValue = from || 0;
            this.maxValue = to || Number.MAX_SAFE_INTEGER;
            this.init(selector, title, from, to);
        }

        /**
         * Function that adding new HTML tags into selector
         * @param selector
         */
        init(selector, title, from, to) {
            this.inputs = {};

            var div = document.createElement('div');
            var input = document.createElement('input');
            var input2 = document.createElement('input');

            this.inputs.from = input;
            this.inputs.to = input2;
            /**
             * Function for append elements
             * @param to
             * @param what
             */
            function appendThis(to, what) {
                to.appendChild(what)
            }

            var that = this;
            div.className = 'filter--area';
            input.value = this.minValue;
            input.className = 'from';
            input.placeholder = 'From';
            input.addEventListener('change', function () {
                that.onChange(input.value, input2.value)
            });
            input2.value = this.maxValue;
            input2.className = 'to';
            input2.placeholder = 'To';
            input2.addEventListener('change', function () {
                that.onChange(input.value, input2.value)
            });

            var filterTitle = document.createElement('span');
            filterTitle.innerHTML = title;

            appendThis(div, filterTitle);
            appendThis(div, input);
            appendThis(div, input2);

            appendThis(document.querySelector(selector), div);
        }

        /**
         * OnChange function
         * @param from
         * @param to
         */
        onChange(from, to) {
            if (from && to) {
                this.emit('change', {
                    from: +from,
                    to: +to
                })
            }
        }

        /**
         * getData
         * @return current state values {from, to}
         *
         */
        getData() {
            var inputs = this.inputs;
            return {
                from: inputs.from.value || this.minValue,
                to: inputs.to.value || this.maxValue
            }
        }
    }

    return RangeFilter
}());
