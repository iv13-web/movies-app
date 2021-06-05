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
        this.$el.addClass('hidden')
        this.onHide()
    }

    show() {
        this.$el.removeClass('hidden')
        this.onShow()
    }
}
