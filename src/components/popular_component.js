import {Component} from '@/core/component'
import {createContent, switchPages, getPage} from '@/modules/card.functions'
import {$} from "@/core/dom";
import {mdb} from "@/services/api.service";

export class Popular extends Component {

    constructor(id, loader) {
        super (id)
        this.loader = loader
        this.url = 'movie/popular'
        this.id = 'popular'
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
        console.log(data)
        this.loader.hide()
    }

    if (target.hasClass('play')) {
        this.loader.show()
        await mdb.showTrailer('movie', id)
        this.loader.hide()
    }

}


