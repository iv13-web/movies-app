import {Component} from '@/core/component';
import {createContent, switchPages, getPage} from '@/modules/card.functions'

export class Popular extends Component {

    static url = 'movie/popular'
    static id = 'popular'

    constructor(id, loader) {
        super (id);
        this.loader = loader
    }

    init() {
        setTimeout(() => ! this.$el.isHidden() && this.onShow(), 0);
    }

    onShow() {
        createContent.bind(this)(Popular.url, getPage(Popular.id), Popular.id)
        this.pagination.on('click', event => {
            switchPages.bind(this)(event, Popular.url, Popular.id)
        });
    }

    onHide() {
        this.container.clear();
        this.pagination.clear();
    }
}

