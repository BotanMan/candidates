var DropDown = (function () {
    'use strict';

    let mainClass = 'dropDown';

    function getSelectorClass(...args) {
        return args.map((val) => mainClass + '-' + val).join(' ');
    }

    function genArrows() {
        return $('<div/>', {
            class: getSelectorClass('arrow', 'down')
        });
    }

    function genSelect(props) {
        let res = $('<select/>', {
            class: getSelectorClass('select')
        });

        props.forEach((value) => {
            res.append($('<option/>', {
                value: Object.keys(value)[0],
                text: value[Object.keys(value)[0]]
            }));
        });

        return res;
    }

    class DropDown extends EventEmitter {
        constructor(selector, props = []) {
            super();
            this.props = props;
            this.initFor(selector);
        }

        initFor(selector) {
            let _this = this;
            this.$select = genSelect(this.props);
            this.$arrows = genArrows();

            $(selector).append(this.$arrows);
            $(selector).append(this.$select);

            this.$arrows.on('click', function () {
                _this.changeDirection();
            });
            this.$select.on('change', function () {
                _this.change();
            });
        }

        change() {
            this.emit('change', this.getData());
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
            let dirNot = (dir === 'down' ? 'up' : 'down');
            this.$arrows.removeClass(getSelectorClass(dirNot));
            this.$arrows.addClass(getSelectorClass(dir));
            this.change();
        }

        changeDirection() {
            this.direction = this.direction === 'down' ? 'up' : 'down';
        }

        getData(){
            return {
                key: this.value,
                order: this.direction
            };
        }
    }

    return DropDown;
}());