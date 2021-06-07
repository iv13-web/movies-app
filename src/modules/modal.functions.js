import {$} from "@/core/dom";
import {mdb} from "@/services/api.service";
import {renderModal} from "@/components/movie_modal_component";

export async function modalHandler (event, type) {

		const target = $(event.target)
		let id
		if (target.noClass('container')) {
				id = target.closest('.card').data.id
		}

		if (target.hasParent('card')) {
				this.loader.show()
				const data = await mdb.getFullData(type, id)
				console.log(data)
				//----------------------
				const modal = $(renderModal(data, type))
				modal.on('click', close) // сюда можно прокидывать функции по сохранению и т.д.
				//----------------------
				this.loader.hide()
		}

		if (target.hasClass('play')) {
				this.loader.show()
				await mdb.showTrailer('movie', id)
				this.loader.hide()
		}
}
//
function close(event) {
		if (event.target.dataset.act === 'close') {
				document.querySelector('body').classList.remove('stop-scroll')
				console.log(this)
				this.removeEventListener('click', close)
				this.remove()
		}
}

