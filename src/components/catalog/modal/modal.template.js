import {$} from "@/core/dom";
import {actorSlides, similarSlides} from "@/components/catalog/modal/modal.functions";

export function renderModal(data, type) {
	const body = $(document.querySelector('body'))

	const title = type === 'movie'
		? data.details.title
		: data.details.name

	const year = type === 'movie'
		? data.details.release_date.slice(0,4)
		: data.details.first_air_date.slice(0,4)

	const runtime = type === 'movie'
		? data.details.runtime + ' мин'
		: data.details.episode_run_time[0] + ' мин'

	const country = data.details.production_countries.length
		? data.details.production_countries[0].iso_3166_1
		: 'не указана'

	const similar = data.similar.length
		? data.similar
		: data.reccommendations

	const modal = document.createElement('div')
	modal.classList.add('modal')
	modal.setAttribute('data-act', 'close' )
	modal.insertAdjacentHTML('afterbegin', `
		<div class="modal__window" data-id="${data.details.id}  data-type="${type}">
			<div class="modal__window-top">
				<img class="modal__img" src="https://image.tmdb.org/t/p/w500/${data.details.poster_path}" alt="${title}">
				<div class="modal__additions">
						<span class="modal__additions-title">${title}</span>
						<span class="modal__additions-line">Год:&nbsp${year}</span> 
						<span class="modal__additions-line">Время:&nbsp${runtime}</span>
						<span class="modal__additions-line">Страна:&nbsp${country}</span>
						<span class="modal__additions-line">Рейтинг:&nbsp${data.details.vote_average}</span>
						<span class="modal__additions-line">Голоса:&nbsp${data.details.vote_count}</span>
				</div>
			</div>
			<div class="modal__window-bottom">
				<div class="modal__section">
					<p class="modal__heading">Сюжет</p>
					<p class="modal__plot">${data.details.overview}</p>
				</div>
				<div class="modal__section">
					<p class="modal__heading">Актеры</p>
					<div class="modal__slider">
						<div class="swiper-container actors__slider">
							<div class="swiper-wrapper">
								${actorSlides(data.cast.cast)}                   
							</div>
							<div class="swiper-pagination"></div>
						</div>
					</div>
				</div>
				<p class="modal__heading">Похожие фильмы</p>
				<div class="modal__section">
					<div class="swiper-container similar__slider">
						<div class="swiper-wrapper">
							${similarSlides(similar, type)}
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
			</div>
		</div>
	`)

	body.insert(modal,'beforeend')
	body.addClass('stop-scroll')

	new Swiper('.actors__slider', {
		slidesPerView: 1,
		spaceBetween: 24,
		pagination: {
				el: '.swiper-pagination',
				clickable: true,
		},
		breakpoints: {
			320:{
				slidesPerView: 2
			},
			448:{
				slidesPerView: 3,
			},
			991:{
				slidesPerView: 4
			},
		}
	})
	new Swiper('.similar__slider', {
		slidesPerView: 1,
		spaceBetween: 24,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			320:{
				slidesPerView: 2
			},
			448:{
				slidesPerView: 3,
			},
			991:{
				slidesPerView: 4
			},
		}
	})

	return $(modal)
}