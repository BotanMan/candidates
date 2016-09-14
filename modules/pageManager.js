let PageManager = (() => {
    "use strict";
    /**
     * Paginator constructor
     * @constructor
     */
    class PageManager {
        /**
         * @param {Array} Array, Array with elements
         * @param {number} pageSize, Size of one page
         * @returns {Array}
         */
        constructor(Array, pageSize) {
            this.usersForRender = [];
            for (let i = 0; i < Math.ceil(Array.length / pageSize); i++) {
                let from = i * pageSize;
                let to = from + pageSize;
                this.usersForRender.push(Array.slice(from,to))
            }
        };
        /**
         * Returns selected page from Array
         * @param {number} page
         * @returns {object}
         */
        getPage(page) {
            return this.usersForRender[page];
        };

        /**
         * Returns legth of users
         * @returns {Number}
         */
        pageCount() {
            return this.usersForRender.length;
        }
    }
    return PageManager;
})();
