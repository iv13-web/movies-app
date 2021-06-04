import {Component} from '@/core/component';
import {createContent, switchPages, getPage} from '@/modules/card.functions'

export class Latest extends Component {

    constructor(id, loader) {
        super (id);
        this.loader = loader
        this.url = 'movie/now_playing'
        this.id = 'latest'
    }

    init() {
        setTimeout(() => this.$el.isVisible() && this.onShow(), 0);
    }

    onShow() {
        createContent.call(this, this.url, getPage(this.id), this.id)
        this.pagination.on('click', event => {
            switchPages.call(this, event, this.url, this.id)
        });
    }

    onHide() {
        this.container.clear();
        this.pagination.clear();
    }
}
