class CardService {

    render(movie) {
        if (!movie.error) {

            const genres = Array.isArray(movie.genres) 
                ? `${movie.genres[0]}`
                : `драма`;
    
            const country = Array.isArray(movie.countries)
                && `${movie.countries[0]}`;
            
            return `
            <div class="card" data-id="${movie.firebaseId}">
                <div class="card__poster">
                    <img class ="card__poster-main" loading="lazy" src="${movie.poster}" alt="">
                    <span class="card__rating">${movie.rating_kinopoisk}</span>
                </div>
                <div class="card__body">
                    <div class="card__title">${movie.title}</div>
                    <div class="card__original-title">${movie.title_alternative || ''}</div>
                    <div class="card__date">${movie.year}</div>
                    <div class="card__additional">${country} &bull; ${genres}</div>
                    <a href="${movie.trailer}" target="_blank" class="card__bottom-button" data-act="trailer">Смотреть трейлер</a>
                </div>
                <div class="card__save-buttons">
                    <svg class="bookmark" data-id="${movie.firebaseId} width="20" height="20" viewBox="0 0 14 14"><path fill="rgba(0, 0, 0, 0.6)" fill-rule="evenodd" d="M9.8 3.2H4.2v7.858l2.8-1.4 2.8 1.4V3.2zM3 2h8v11l-4-2-4 2V2z"></path></svg>
                    <svg class="seen" data-id="${movie.firebaseId} width="20" height="20" viewBox="0 0 14 14"><path fill="rgba(0, 0, 0, 0.6)" fill-rule="evenodd" d="M8.8 3.999A5.332 5.332 0 0 0 7 3.7c-.637 0-1.237.098-1.8.299V5.5a1.8 1.8 0 1 0 3.6 0V3.999zm1.2.618V5.5a3 3 0 1 1-6 0v-.883C3.215 5.16 2.511 5.95 1.879 7 3.23 9.244 4.91 10.3 7 10.3c2.089 0 3.77-1.056 5.121-3.3C11.49 5.95 10.785 5.16 10 4.617zM7 11.5C4.267 11.5 2.1 10 .5 7 2.1 4 4.267 2.5 7 2.5S11.9 4 13.5 7c-1.6 3-3.767 4.5-6.5 4.5z"></path></svg>
                </div>
            </div>
        `;
        }
    }

    sortByRatingFromTop(moviesArray) {
        const filteredArray = moviesArray.filter(movie => movie.rating_kinopoisk);
        filteredArray.forEach(movie => movie.rating_kinopoisk = movie.rating_kinopoisk.toFixed(1));
        return filteredArray.sort((a,b) => b.rating_kinopoisk - a.rating_kinopoisk);
    }
}

export const cardService = new CardService(); 
