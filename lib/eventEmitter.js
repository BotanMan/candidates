let EventEmitter = (function() {
	'use strict';

	class EventEmitter {
		constructor() {
			this.events = {};
		}

		on(event, handler) {
			var ret = false;

			if (!this.events[event]) {
				this.events[event] = [];
			}
			if (typeof handler === 'function') {
				this.events[event].push(handler);
				ret = true;
			}

			return ret;
		}

		emit(event, ...data) {
			var ret = [];

			if (!!this.events[event]) {
				this.events[event].forEach((handler) => {
					ret.push(handler(...data));
				});
			}

			return ret;
		}

		off(event, handler) {
			var ret = [];

			if (!!this.events[event] && ~this.events[event].indexOf(handler)) {
				ret.push(this.events[event].splice(this.events[event].indexOf(handler), 1));
			}

			return ret;
		}
	}

	return EventEmitter;
})();