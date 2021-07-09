export function modalHandler(event) {
	if (event.target.dataset.act === 'close') {
		document.querySelector('body').classList.remove('stop-scroll')
		this.remove()
	}
}

export function actorSlides(array) {
	let html = ''
	if (array.length > 10) array = array.slice(0, 10)
	array.forEach(person => {
		const character = person.character.length > 20
			? person.character.split('').slice(0,21).concat('...').join('')
			: person.character
		if (person.profile_path) {
			html += `
				<div class="swiper-slide">
					<div class="modal__cast-wrapper">
						<img src="https://image.tmdb.org/t/p/w500${person.profile_path}" alt="">
						<p class="modal__cast-name">${person.name}</p>
						<p class="modal__cast-role">${character}</p>
					</div>
				</div>
			`
		}
	})
	return html
}

export function similarSlides(array, type) {
	let html = ''
	if (array.length > 10) array = array.slice(0, 10)
	array.forEach(movie => {
		const format = type === 'movie'
			? movie.title
			: movie.name
		const title = format.length > 20
			? format.split('').slice(0,21).concat('...').join('')
			: format
		if (movie.poster_path) {
			html += `
				<div class="swiper-slide">
					<div class="modal__cast-wrapper">
						<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" data-id="${movie.id}" alt="">
						<p class="modal__movie-title">${title}</p>
					</div>
				</div>
			`
		}
	})
	return html
}