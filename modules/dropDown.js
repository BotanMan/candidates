let DropDown = (function(){
	'use strict';

	let mainClass = 'dropDown'

	function getSelectorClass(...args) {
		return args.map((val) => mainClass + '-' + val).join(' ');
	}

	function genArrows() {
		let res = $('<div/>', {
			class: getSelectorClass('arrow', 'down')
		});
		return res;
	}

	function genSelect(props) {
		let res = $('<select/>', {
			class: getSelectorClass('select')
		});

		props.forEach((value) => {
			res.append($('<option/>', {
				value: value,
				text: value
			}));
		});

		return res;
	}

	class DropDown extends EventEmitter {
		constructor(selector, props = [], sortHandler) {
			super();
			this.props = props;
			this.sortHandler = sortHandler;
			this.initFor(selector);
		}
		initFor(selector) {
			let _this = this;
			this.$select = genSelect(this.props);
			this.$arrows = genArrows();

			$(selector).append(this.$arrows);
			$(selector).append(this.$select);

			this.on('change', this.sortHandler);

			this.$arrows.on('click', function() {
				_this.changeDirection();
			});
			this.$select.on('change', function() {
				_this.change();
			});
		}
		change() {
			this.emit('change', {
				key: this.value,
				order: this.direction
			});
		}
		get value() {
			return this.$select.val();
		}
		set value(val) {
			this.$select.val(val);
			this.change();
		}
		get direction() {
			let ret = 'up';
			if (this.$arrows.hasClass(getSelectorClass('down'))) {
				ret = 'down';
			}
			return ret;
		}
		set direction(dir) {
			let dirNot = (dir === 'down' ? 'up' : dir);
			this.$arrows.removeClass(getSelectorClass(dir));
			this.$arrows.addClass(getSelectorClass(dirNot));
			this.change();
		}
		changeDirection() {
			this.direction = this.direction === 'down' ? 'up' : 'down';
		}
	}

	return DropDown;
}());