export class Card  {

		render(movie) {

				if (movie.poster_path) {
						// проверка на отсутствие рейтинга
						const rating = movie.vote_average
								? `<span class="cardd__rating">${movie.vote_average.toFixed(1)}</span>`
								: ''

						return `
            <div class="cardd" data-id="${movie.id}">
                <img class="cardd__img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
                ${rating}
                <p class="cardd__text">${movie.title}</p>
            </div>
        `
				}
		}
}

