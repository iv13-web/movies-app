import {$} from "@/core/dom";
import {Component} from '@/core/component'
import {mdb} from "@/services/api.service";
import {createContent, switchPages, getPage} from '@/modules/card.functions'
import {MovieCardModal} from "@/components/movie_modal_component";

export class Popular extends Component {

    constructor(id, url, loader) {
        super (id, url)
        this.loader = loader
    }

    init() {
        setTimeout(() => this.$el.isVisible() && this.onShow(), 0)

        this.pagination.on('click', event => {
            switchPages.call(this, event, this.url, this.id)
        })

        this.container.on('click', event => {
            cardHandler.call(this, event)

        })

    }

    onShow() {
        createContent.call(this, this.url, getPage(this.id), this.id)
    }

    onHide() {
        this.container.clear()
        this.pagination.clear()
    }
}

async function cardHandler (event) {

    const target = $(event.target)
    const id = target.closest('.card').id

    if (target.hasParent('card')) {
        this.loader.show()
        const data = await mdb.getFullData('movie', id)
        MovieCardModal.create(data)
        this.loader.hide()
    }

    if (target.hasClass('play')) {
        this.loader.show()
        await mdb.showTrailer('movie', id)
        this.loader.hide()
    }
}


