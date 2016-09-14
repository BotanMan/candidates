let Paginator = (() => {
    "use strict";
    class Paginator extends EventEmitter {
        /**
         * Constructor for elements
         * @param selector
         * @param pageCount
         */
        constructor (selector, pageCount) {
            super();
            this.currentPage = 0;
            this.init(selector, pageCount)
        }

        /**
         * Function for appending element to HTML
         * @param selector
         * @param pageCount
         */
        init (container, pageCount) {
            /**
             * Appending item to element
             * @param to
             * @param what
             */
            container.innerHTML = "";
            let appendThis = (to, what) => {
                to.appendChild(what)
            };

            for (let i = 0; i < pageCount; i++) {
                let pageBtn = document.createElement('button');
                pageBtn.innerHTML = i + 1;
                pageBtn.dataset.page = i;
                appendThis(container,pageBtn);
                pageBtn.addEventListener('click', () => {
                    var page = pageBtn.dataset.page;
                    this.currentPage = page;
                    this.emit('pageChanged', page);
                })
            }
        }

        getData() {
            return this.currentPage;
        }
    }
    return Paginator;
})();

