import {$} from "@/core/dom";
import {mdb} from "@/services/api.service";
import {MovieCardModal} from "@/components/movie_modal_component"

export async function modalHandler (event, type) {

		const target = $(event.target)
		const id = target.closest('.card').id
		if (target.hasParent('card')) {
				this.loader.show()
				const data = await mdb.getFullData(type, id)
				console.log(data)
				MovieCardModal.create(data, type)
				this.loader.hide()
		}

		if (target.hasClass('play')) {
				this.loader.show()
				await mdb.showTrailer('movie', id)
				this.loader.hide()
		}
}