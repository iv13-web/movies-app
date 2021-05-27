import {Component} from '../core/component';


export class FilmsComponent extends Component {
    constructor(id) {
        super (id);

    }

    init() {
        setTimeout(() => {
            if (!this.$el.classList.contains('hidden')) {
                this.onShow();
            }
        }, 0);
    }
    
    onShow() {
        this.$el.querySelector(".pagination").innerHTML = createPagination(15, 1, this.index());
    }

    onHide() {
        this.$el.querySelector(".pagination").innerHTML = '';
    }
}

