function searchFilter (items, query, ...keys) {
    return items.filter(function(item) {
        var was = false;
        for (var k = 0; k < keys.length; k++) {
            if( item.hasOwnProperty(keys[k]) && item[keys[k]] == query) {
                was = true;
            }
        }
        return was;
    });
}