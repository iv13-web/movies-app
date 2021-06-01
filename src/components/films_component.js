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

        this.pagination.innerHTML = createPagination(8, 1, 'films');
    }

    onHide() {
        this.pagination.innerHTML = '';
    }
}

