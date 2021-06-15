import {Component} from '@/core/component'
import {storage} from "@/core/utils";
import {
    showSearchTab,
    hideSearchTab,
    showLastSelected,
    tabsHandler,
} from "@modules/nav.functions";

export class NavComponent extends Component {
    constructor(id, observer, tabs) {
        super (id, observer, tabs)
    }

    prepare() {
        this.observer.subscribe('search:open', showSearchTab.bind(this))
        this.observer.subscribe('search:close', hideSearchTab.bind(this))
    }

    init() {
        storage('lastSelected') && showLastSelected.call(this)
        this.$el.on('click', tabsHandler.bind(this))
    }
}
