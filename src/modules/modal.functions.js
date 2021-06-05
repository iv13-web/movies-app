import {MovieCardModal} from "@/components/movie_modal_component"
import {$} from "@/core/dom";
import {mdb} from "@/services/api.service";

export async function modalHandler (event) {

		const target = $(event.target)
		const id = target.closest('.card').id
		if (target.hasParent('card')) {
				this.loader.show()
				const data = await mdb.getFullData('movie', id)
				console.log(data)
				MovieCardModal.create(data)
				this.loader.hide()
		}

		if (target.hasClass('play')) {
				this.loader.show()
				await mdb.showTrailer('movie', id)
				this.loader.hide()
		}
}