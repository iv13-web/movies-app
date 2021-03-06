import {$} from "@/core/dom";

export function createPlayerModal(url) {
	const modal = document.createElement('div')
	modal.classList.add('trailer-modal')
	modal.setAttribute('data-act', 'close' )
	modal.insertAdjacentHTML('afterbegin', `
		<div class="trailer-modal__window">
			<div id="player"></div>
		</div>
	`)
	this.$root.insert(modal, 'beforeend')
	document.body.classList.add('stop-scroll')
	new YT.Player('player', {
		height: '100%',
		width: '100%',
		videoId: `${url}`,
	})
	return $(modal)
}