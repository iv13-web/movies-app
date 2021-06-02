import {Component} from '@/core/component';
import {createContent, switchPages, getPage} from '@/modules/card.functions'

export class Latest extends Component {

    static url = 'movie/now_playing'
    static id = 'latest'

    constructor(id, loader) {
        super (id);
        this.loader = loader
    }

    init() {
        setTimeout(() => ! this.$el.isHidden() && this.onShow(), 0);
    }

    onShow() {
        createContent.bind(this)(Latest.url, getPage(Latest.id), Latest.id)
        this.pagination.on('click', event => {
            switchPages.bind(this)(event, Latest.url, Latest.id)
        });
    }

    onHide() {
        this.container.clear();
        this.pagination.clear();
    }
}
