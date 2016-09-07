;var filter = (function(){
    var filterByRange = function (items,key,from,to) {
        var scores = [];
        var MIN_SCORE = from;
        var MAX_SCORE = to;
        for (var keys in items) {
            if (keys.hasOwnProperty(key)) {
                    if (items[keys] >= MIN_SCORE && items[keys] <= MAX_SCORE) {
                        scores.push(items[keys]);
                    }
            }
        }
        return scores;
    };
    return filterByRange;
})();