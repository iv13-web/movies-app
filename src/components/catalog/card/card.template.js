export function renderCard(movie) {
	const rating = movie.vote_average
			? `<span class="card__rating">${movie.vote_average.toFixed(1)}</span>`
			: ''
	const title = movie.title ? movie.title : movie.name
	return `
		<div class="col_xs-6 col_sm-4 col_md-3 col_lg-2">
			<div class="card" data-id="${movie.id}">
				<div class="play-btn" data-type="play">
					<i class="fab fa-youtube" data-type="play"></i>
				</div>
				<img class="card__img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${title}" data-type="card">
				${rating}
				<p class="card__text">${title}</p>
			</div>
		</div>
	`
}