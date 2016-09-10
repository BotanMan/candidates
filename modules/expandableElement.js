let ExpandableElement = (() => {
    // принимает елемент, вешает событие клик,
    // по клику меняет состояние (true/false),
    // находит футер и показывает/скрывает

    class ExpandableElement {
        constructor(item){
            this.state = false;
            this._item = item;
            this._item.addEventListener('click', (event) => {
                let block = this._item.querySelector('.user--details');
                if (this.state === false) {
                    this.state = true;
                    block.classList.remove('hidden')

                } else {
                    this.state = false;
                    block.classList.add('hidden')
                }
            })
        }
    }
    return ExpandableElement;
})();