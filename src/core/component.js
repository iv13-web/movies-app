import {$} from '@/core/dom'

export class Component {

    constructor (id, url) {
        this.$el = $(document.getElementById(id));
        this.id = id
        this.url = url

        this.container = this.$el.find('.container');
        this.pagination = this.$el.find('.pagination');
        this.init();
    }

    init() {

    } 

    onShow() {

    }

    onHide() {

    }

    hide() {
        this.$el.addClass('hidden');
        this.onHide();
    }

    show() {
        this.$el.removeClass('hidden');
        this.onShow();
    }
}
