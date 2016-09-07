function sortHandler(items, key, direction) {
	items.sort((a, b) => {

		if (direction === 'up') {
			if (a[key] > b[key]) {
				return 1;
			}
			else if (a[key] < b[key]) {
				return -1
			}
			return 0;
		}
		else {
			if (a[key] < b[key]) {
				return 1;
			}
			else if (a[key] > b[key]) {
				return -1
			}
			return 0;
		}
	})
}