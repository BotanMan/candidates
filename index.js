let users = User.getBots(),
    filteredUsers = users.splice();

let search = new SearchBar('.candidates--content--search'),
    rangeFilter = new RangeFilter('.candidates--sidebar', 'JS Skill', 0, getMaxByKey(users, 'skills.js')),
    rangeFilterBySkillsScore = new RangeFilter('.candidates--sidebar', 'Skill Score', 0, getMaxByKey(users, 'skillsScore')),
    dropdown = new DropDown('.candidates--content--dropdown',
        [{'firstName': 'Имя'}, {'lastName': 'Фамилия'}, {'skillsScore': 'Навыки'}]),
    paging, pageManager;

search.on('change', onChange);
dropdown.on('change', onChange);
rangeFilter.on('change', onChange);
rangeFilterBySkillsScore.on('change', onChange);

onChange();

function onPageChanged(pageNumber){
    var usersPage = pageManager.getPage(pageNumber);
    updateUsers('#users', usersPage);
    let elem = document.querySelectorAll('.user');
    for (var i = 0; i < elem.length; i++) {
        new ExpandableElement(elem[i]);
    }
}

function onChange() {
    //sort
    let range = rangeFilter.getData(),
        skillScoreRange = rangeFilterBySkillsScore.getData(),
        sortDescriptor = dropdown.getData(),
        query = search.getData();

    filteredUsers = users.slice();

    filteredUsers = filter.sortHandler(filteredUsers, sortDescriptor.key, sortDescriptor.order);
    filteredUsers = filter.filterByRange(filteredUsers, 'skills.js',
        range.from, range.to);
    filteredUsers = filter.filterByRange(filteredUsers, 'skillsScore',
        skillScoreRange.from, skillScoreRange.to);
    filteredUsers = filter.filterByQuery(filteredUsers, query,
        'firstName', 'lastName');

    pageManager = new PageManager(filteredUsers, 8);
    paging = new Paginator($('.candidates--paging')[0],
        pageManager.pagesCount);
    paging.on('pageChanged', onPageChanged);

    onPageChanged(paging.getData());
}

function getMaxByKey(items, key) {
    let filteredItems = items.slice();
    let maxValue = 0;
    for (var i = 0; i < filteredItems.length; i++) {
        let item = filteredItems[i];
        let filterBySkill = filter.getValueByKeyRec(item, key);
        if (maxValue < filterBySkill) {
            maxValue = filterBySkill;
        }
    }

    return maxValue;
}
