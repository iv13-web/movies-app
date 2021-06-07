import {$} from "@/core/dom";


// export class MovieCardModal  {
//
//     static create(data, type) {
//         const body = $(document.querySelector('body'))
//
//         const title = type === 'movie'
//             ? data.details.title
//             : data.details.name
//
//         const year = type === 'movie'
//             ? data.details.release_date.slice(0,4)
//             : data.details.first_air_date.slice(0,4)
//
//         const runtime = type === 'movie'
//             ? data.details.runtime + ' мин'
//             : data.details.episode_run_time[0] + ' мин'
//
//         const country = data.details.production_countries.length
//             ? data.details.production_countries[0].iso_3166_1
//             : 'не указана'
//
//
//         const modal = document.createElement('div')
//         modal.classList.add('modal')
//         modal.setAttribute('data-act', 'close' )
//         modal.insertAdjacentHTML('afterbegin', `
//                 <div class="modal__window" data-id="${data.details.id}  data-type="${type}">
//                     <div class="modal__window-top">
//                         <img class="modal__img" src="https://image.tmdb.org/t/p/w500/${data.details.poster_path}" alt="${title}">
//                         <div class="modal__additions">
//                             <span class="modal__additions-title">${title}</span>
//                             <span class="modal__additions-line">Год:&nbsp${year}</span>
//                             <span class="modal__additions-line">Время:&nbsp${runtime}</span>
//                             <span class="modal__additions-line">Страна:&nbsp${country}</span>
//                             <span class="modal__additions-line">Рейтинг:&nbsp${data.details.vote_average}</span>
//                             <span class="modal__additions-line">Голоса:&nbsp${data.details.vote_count}</span>
//                         </div>
//                     </div>
//                     <div class="buttons-container">
//                         <div class="button button_like"><i class="far fa-heart button__icon"></i>Сохранить</div>
//                         <div class="button button_seen"><i class="fas fa-eye button__icon"></i>Отметить</div>
//                     </div>
//
//                     <div class="modal__window-bottom">
//                         <div class="modal__section">
//                             <p class="modal__heading">Сюжет</p>
//                             <p>${data.details.overview}</p>
//                         </div>
//                         <div class="modal__section">
//                             <p class="modal__heading">Актеры</p>
//                             <div class="modal__slider">
//                                 <div class="swiper-container actors__slider">
//                                     <div class="swiper-wrapper">
//                                         ${getMoviesSlides(data.cast.cast, 'cast')}
//                                     </div>
//                                     <div class="swiper-pagination"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <p class="modal__heading">Похожие фильмы</p>
//                         <div class="modal__slider">
//                             <div class="swiper-container similar__slider">
//                                 <div class="swiper-wrapper">
//                                     <div class="swiper-slide">
//                                         <div class="modal__cast-wrapper">
//                                             <img src="./assets/icons/actor.jpg" alt="">
//                                             <p class="modal__cast-name">Натали Портман</p>
//                                             <p class="modal__cast-role">РольРоль</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="swiper-pagination"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         `)
//
//         body.insert(modal,'beforeend')
//         body.addClass('stop-scroll')
//
//         new Swiper('.actors__slider', {
//             slidesPerView: 2,
//             spaceBetween: 20,
//             // clickable: false,
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//         })
//         new Swiper('.creators__slider', {
//             slidesPerView: 2,
//             spaceBetween: 20,
//             // clickable: false,
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//         })
//
//         modal.addEventListener('click', close)
//         return modal
//     }
//
// }
//
//
//
function close(event) {
    if (event.target.dataset.act === 'close') {
        document.querySelector('body').classList.remove('stop-scroll')
        this.removeEventListener('click', close)
        this.remove()
    }
}


function getMoviesSlides(array, type) {
    let html = ''

    if (array.length > 10) array = array.slice(0, 11)

    array.forEach(person => {

        if (person.profile_path !== null) {
            html += `
                <div class="swiper-slide">
                    <div class="modal__cast-wrapper">
                        <img src="https://image.tmdb.org/t/p/w500/${person.profile_path}" alt="">
                        <p class="modal__cast-name">${person.name}</p>
                        <p class="modal__cast-name">${person.character}</p>
                    </div>
                </div>
            `
        }
    })

    // console.log(html)
    return html

}

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
                    <div class="buttons-container">
                        <div class="button button_like"><i class="far fa-heart button__icon"></i>Сохранить</div>
                        <div class="button button_seen"><i class="fas fa-eye button__icon"></i>Отметить</div>
                    </div>
                  
                    <div class="modal__window-bottom">
                        <div class="modal__section">
                            <p class="modal__heading">Сюжет</p>
                            <p>${data.details.overview}</p>
                        </div>
                        <div class="modal__section">
                            <p class="modal__heading">Актеры</p>
                            <div class="modal__slider">
                                <div class="swiper-container actors__slider">
                                    <div class="swiper-wrapper">
                                        ${getMoviesSlides(data.cast.cast, 'cast')}                   
                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                        <p class="modal__heading">Похожие фильмы</p>
                        <div class="modal__slider">
                            <div class="swiper-container similar__slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="modal__cast-wrapper">
                                            <img src="./assets/icons/actor.jpg" alt="">
                                            <p class="modal__cast-name">Натали Портман</p>
                                            <p class="modal__cast-role">РольРоль</p>
                                        </div>
                                    </div>
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
        slidesPerView: 2,
        spaceBetween: 20,
        // clickable: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
    new Swiper('.creators__slider', {
        slidesPerView: 2,
        spaceBetween: 20,
        // clickable: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })

    modal.addEventListener('click', close)
    return modal
}