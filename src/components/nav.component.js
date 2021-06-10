import {Component} from '@/core/component'
import {
    closeSearchTab,
    openSearchTab,
    showLastSelected,
    tabsHandler,
} from "@modules/nav.functions";

export class NavComponent extends Component {
    constructor(id, observer, tabs) {
        super (id, observer, tabs)
    }

    prepare() {
        this.observer.subscribe('search:open', openSearchTab.bind(this))
        this.observer.subscribe('search:close', closeSearchTab.bind(this))
    }

    init() {
        this.$el.on('click', tabsHandler.bind(this))
        if (localStorage.getItem('lastSelected')) {
            showLastSelected.call(this)
        }
    }
}
