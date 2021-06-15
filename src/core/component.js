import {$} from '@/core/dom'

export class Component {

    constructor (id, observer, tabs) {
        this.id = id
        this.observer = observer
        this.tabs = tabs
        this.$el = $(document.getElementById(id))
        this.$root = $(document.getElementById('root'))
        this.prepare()
        this.init()
    }

    prepare() {
        this.container = this.$el.find('.container') || null
        this.pagination = this.$el.find('.pagination') || null
    }

    init() {
    }

    onShow() {
    }

    onHide() {
    }

    hide() {
        this.onHide()
        this.$el.addClass('hidden')
    }

    show() {
        this.$el.removeClass('hidden')
        this.onShow()
    }
}
