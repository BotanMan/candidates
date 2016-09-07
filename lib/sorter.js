function sortHandler(items, key, direction) {
	let koef = (direction === 'up' ? 1 : -1);
	return items.sort((a, b) => {
		if (a[key] > b[key]) {
			return koef;
		}
		else if (a[key] < b[key]) {
			return -koef;
		}
		return 0;
	})
}