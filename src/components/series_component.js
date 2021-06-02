import {Component} from '../core/component';

export class SeriesComponent extends Component {
    constructor(id) {
        super (id);

    }

    init() {
        // this.$el.querySelector(".pagination").innerHTML = createPagination(15, 1, 'series');

    }

    onShow() {
        // this.$el.querySelector(".pagination").innerHTML = createPagination(15, 1, this.index());
        this.$el.find(".pagination").innerHTML = createPagination(15, 1, 'series');
    }

    onHide() {
        this.$el.find(".pagination").innerHTML = '';
    }

}