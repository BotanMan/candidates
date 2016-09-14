;var filter = (function () {
    var filterByRange = function filterByRange(items, key, from, to) {
        //'skills.js'

        var resultItems = [];
        for (let i = 0; i < items.length; ++i) {
            var item = items[i];
            var value = getValueByKey(item, key)
            if (value  >= from && value <= to) {
                resultItems.push(item);
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
                if (new RegExp(query.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1"), 'iu').test(value)) {
                    return true;
                }
            }
            return false;
        });
    }

    function getValueByKeyRec(obj, key) {
        if (~key.indexOf('.')) {
            var parts = key.split('.');
            return getValueByKeyRec(
                obj[parts[0]],
                parts.slice(1).join('.')
            );
        }
        return obj[key];
    }

    function getValueByKey(obj, key) {
        let parts = key.split('.'),
            next = obj;

        for (let i = 0; i < parts.length - 1; ++i) {
            next = next[parts[i]];
        }

        return next[parts[parts.length - 1]];
    }

    return {
        filterByRange,
        sortHandler,
        filterByQuery,
        getValueByKey,
        getValueByKeyRec
    }
})
();