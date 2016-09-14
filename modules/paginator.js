let Paginator = (() => {
    "use strict";
    class Pagitanor extends EventEmitter {
        /**
         * Constructor for elements
         * @param selector
         * @param pageCount
         */
        constructor (selector, pageCount) {
            super();
            this.init(selector, pageCount)
        }

        /**
         * Function for appending element to HTML
         * @param selector
         * @param pageCount
         */
        init (selector, pageCount) {
            /**
             * Appending item to element
             * @param to
             * @param what
             */
            let appendThis = (to, what) => {
                to.appendChild(what)
            };
            for (let i = 0; i < pageCount; i++) {
                let pageBtn = document.createElement('button');
                pageBtn.text(i + 1);
                pageBtn.dataset.page = i;
                appendThis(selector,pageBtn);
                pageBtn.addEventListener('click', () => {
                    return pageBtn.data.page;
                })
            }
        }
    }
    return Paginator;
})();

