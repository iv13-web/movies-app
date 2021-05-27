import {Component} from '../core/component';


export class FilmsComponent extends Component {
    constructor(id) {
        super (id);

    }

    init() {
        
        this.$element.querySelector(".pagination ul").innerHTML = createPagination(15, 1, this.index());
    }
}

