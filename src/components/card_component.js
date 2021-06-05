export class Card  {

		static render(movie) {

				if (movie.poster_path) {
						// проверка на отсутствие рейтинга
						const rating = movie.vote_average
								? `<span class="card__rating">${movie.vote_average.toFixed(1)}</span>`
								: ''
						// убрать и оставить movie.title
						const title = movie.title
								? movie.title
								: movie.name

						return `
            <div class="card" data-id="${movie.id}">
									<div class="play-btn">
                		<i class="fab fa-youtube play"></i>
									</div>
								<img class="card__img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${title}">
								${rating}
								<p class="card__text">${title}</p>
            </div>
        `
				}
		}
}

