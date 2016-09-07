function sortHandler(items, key, direction) {
	items.sort((a, b) => {
		if (direction === 'up') {
			return a[key] - b[key];
		}
		else {
			return b[key] - a[key];
		}
	})
}