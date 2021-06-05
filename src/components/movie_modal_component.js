import {$} from "@/core/dom";

export class MovieCardModal  {

    static create(data, type) {

        const body = $(document.querySelector('body'))
        const title = type === 'movie' ? data.details.title : data.details.name


        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.setAttribute('data-act', 'close' )
        modal.insertAdjacentHTML('afterbegin', `
                <div class="modal__window">
                    <div class="modal__window-top">
                        <img class="modal__img" src="https://image.tmdb.org/t/p/w500/${data.details.poster_path}" alt="${title}">
                        <div class="modal__additions">
                            <span class="modal__additions-title">${title}</span>
                            <span class="modal__additions-line">Год:&nbsp</span> 
                            <span class="modal__additions-line">Время:&nbsp</span>
                            <span class="modal__additions-line">Страна:&nbsp</span>
                            <span class="modal__additions-line">Рейтинг:&nbsp</span>
                            <span class="modal__additions-line">Голоса:&nbsp</span>
                        </div>
                    </div>
                    <div class="buttons-container">
                        <div class="button button_like"><i class="far fa-heart button__icon"></i>Сохранить</div>
                        <div class="button button_seen"><i class="fas fa-eye button__icon"></i>Отметить</div>
                    </div>
                  
                    <div class="modal__window-bottom">
                        <div class="modal__section">
                            <p class="modal__heading">Сюжет</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus cum dolorum iure iusto laudantium, mollitia nam nobis sapiente suscipit.</p>
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
                        <div class="modal__section">
                            <p class="modal__heading">Авторы</p>
                            <div class="modal__slider">
                                <div class="swiper-container creators__slider">
                                    <div class="swiper-wrapper">
                                        ${getMoviesSlides(data.cast.crew, 'crew')}  
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
        document.querySelector('body').classList.add('stop-scroll')

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
}

function close(event) {
    document.querySelector('body').classList.remove('stop-scroll')
    event.target.dataset.act === 'close' && this.remove()
}


function getMoviesSlides(array, type) {
    let html = ''
    array.forEach(person => {
        const personalData = type === 'cast'
            ? `<p class="modal__cast-name">${person.character}</p>`
            : `<p class="modal__cast-name">${person.known_for_department}</p>`
        if (person.profile_path !== null) {
            html +=
                `<div class="swiper-slide">
                <div class="modal__cast-wrapper">
                    <img src="https://image.tmdb.org/t/p/w500/${person.profile_path}" alt="">
                    <p class="modal__cast-name">${person.name}</p>
                    ${personalData}
                </div>
            </div>`
        }
    })
    return html

    // for (let i = 0; i < 5; i++) {
    //     const personalData = type === 'cast'
    //         ? `<p class="modal__cast-name">${array[i].character}</p>`
    //         : `<p class="modal__cast-name">${array[i].known_for_department}</p>`
    //
    //     if (array[i].profile_path !== null) {
    //         html +=
    //             `<div class="swiper-slide">
    //             <div class="modal__cast-wrapper">
    //                 <img src="https://image.tmdb.org/t/p/w500/${array[i].profile_path}" alt="">
    //                 <p class="modal__cast-name">${array[i].name}</p>
    //                 ${personalData}
    //             </div>
    //         </div>`
    //         console.log(array[i].a)
    //     }
    // }
}

