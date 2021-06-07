import {$} from '@/core/dom'

export class Component {

    constructor (id) {
        this.$el = $(document.getElementById(id))
        this.id = id
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
