let users = User.getBots();
updateUsersTemplate('#users', users);

var search = new SearchBar();
search.initFor('.candidates--content--search');
search.on('change', function (query) {
    var filteredUsers = filter.filterByQuery(users, query, 'firstName', 'lastName')
    updateUsersTemplate('#users', filteredUsers);
});

var dropdown = new DropDown('.candidates--content--dropdown',
    ['firstName', 'lastName', 'skillsScore']);

dropdown.on('change', function (data) {
    var filteredUsers = filter.sortHandler(users, data.key, data.order);
    updateUsersTemplate('#users', filteredUsers);
});

var rangeFilter = new RangeFilter();
rangeFilter.init('.candidates--sidebar');
rangeFilter.on('change', function (data) {
    var filteredUsers = filter.filterByRange(users, 'skillsScore', data.from, data.to);
    updateUsersTemplate('#users', filteredUsers);
});


