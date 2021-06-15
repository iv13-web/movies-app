import {Component} from '@/core/component'
import {storage} from "@/core/utils"
import * as nav from './nav.functions'

export class NavComponent extends Component {
    constructor(id, observer, tabs) {
        super (id, observer, tabs)
    }

    prepare() {
        console.log(this.observer)
        this.observer.subscribe('search:open', nav.showSearchTab.bind(this))
        this.observer.subscribe('search:close', nav.hideSearchTab.bind(this))
    }

    init() {
        storage('lastSelected') && nav.showLastTab.call(this)
        this.$el.on('click', nav.handler.bind(this))
    }
}
