import {Component} from '@/core/component'
import * as nav from './nav.functions'

export class NavComponent extends Component {
    constructor(id, observer, tabs) {
        super (id, observer, tabs)
    }

    prepare() {
        this.observer.subscribe('search:open', nav.showSearchTab.bind(this))
        this.observer.subscribe('search:close', nav.hideSearchTab.bind(this))
    }

    init() {
        nav.showLastTab.call(this)
        this.$el.on('click', nav.handler.bind(this))
    }
}
