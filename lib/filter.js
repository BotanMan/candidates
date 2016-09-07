;var filter = (function () {
    var filterByRange = function filterByRange(items, key, from, to) {
        var resultItems = [];
        for (let i = 0; i < items.length; ++i) {
            var item = items[i];

            if (item.hasOwnProperty(key)) {
                if (item[key] >= from && item[key] <= to) {
                    resultItems.push(item);
                }
            }
        }
        return resultItems;
    };

    function sortHandler(items, key, direction) {
        let kaif = (direction === 'up' ? 1 : -1);
        return items.sort((a, b) => {
            if (a[key] > b[key]) {
                return kaif;
            }
            else if (a[key] < b[key]) {
                return -kaif;
            }
            return 0;
        })
    }

    function filterByQuery(items, query, ...keys) {
        return items.filter(function (item) {
            for (var i = 0; i < keys.length; i++) {
                if (!item.hasOwnProperty(keys[i]) ||
                    typeof item[keys[i]] !== 'string') {
                    continue;
                }

                var value = item[keys[i]];
                if (~value.indexOf(query)) {
                    return true;
                }
            }
            return false;
        });
    }

    return {
        filterByRange,
        sortHandler,
        filterByQuery
    }
})
();