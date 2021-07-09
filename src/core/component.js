import {$} from '@/core/dom'

export class Component {
    constructor (id, observer, tabs) {
        this.id = id
        this.observer = observer
        this.tabs = tabs
        this.loader = $(document.getElementById('loader'))
        this.$el = $(document.getElementById(id))
        this.$root = $(document.getElementById('root'))
        this.prepare()
        this.init()
    }

    prepare() {
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
