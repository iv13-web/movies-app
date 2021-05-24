
export class MovieCardModal {

    create(json) {

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.insertAdjacentHTML('afterbegin', `

            <div class="modal__overlay" data-act="close">
                <div class="modal__window">
                    <div class="modal__window-close" data-act="close"></div>
                    <div class="modal__window-wrapper">
                        <h1 class="modal__title">${json.title}</h1>
                        <div class="modal__window-top">
                            <img class="modal__img" src="${json.poster}" alt="">
                            <div class="modal__additions">
                                <span>Жанр:&nbsp;${json.genres[0]}</span> <span>Страна:&nbsp;${json.countries[0]}</span>
                                <span>Год:&nbsp;${json.year}</span> <span>Рейтинг:&nbsp;${json.rating_kinopoisk}</span>
                                <span>Рейтинг IMDB:&nbsp;${json.rating_imdb}</span> <span>Длительность:&nbsp;${json.collapse.duration[0]}</span>
                            </div>
                        </div>
                        <div class="modal__window-bottom">
                            <p class="modal__description">${json.description}</p>
                            <p class="modal__heading">Кадры из фильма</p>
                            <div class="swiper-container modal__slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><img loading="lazy" src="${json.screenshots[0]}" alt=""></div>
                                    <div class="swiper-slide"><img loading="lazy" src="${json.screenshots[1]}" alt=""></div>
                                    <div class="swiper-slide"><img loading="lazy" src="${json.screenshots[2]}" alt=""></div>
                                    <div class="swiper-slide"><img loading="lazy" src="${json.screenshots[3]}" alt=""></div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                            <p class="modal__heading">Дополнительные данные</p>
                            <div class="modal__bottom-wrapper">
                            <div class="modal__extra-info"><p>Режиссер</p><p>${json.directors[0]}</p></div>
                                <div class="modal__extra-info"><p>Сценарист</p><p>${json.screenwriters[0]}</p></div>
                                <div class="modal__extra-info"><p>Премьера</p><p>${json.premiere_world}</p></div>
                                <div class="modal__extra-info"> <p>MPAA</p><p>${json.age}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);

        document.querySelector('body').insertAdjacentElement('beforeend', modal);

        const swiper = new Swiper('.modal__slider', {
            slidesPerView: "auto",
            spaceBetween: 100,
            clickable: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }, 
        });

        modal.addEventListener('click', modalHandler);
        return modal;
    }


}

function modalHandler(event) {

    document.querySelector('body')
      .classList.remove('stop-scroll');

    event.target.dataset.act === 'close' && this.remove();
    
    
    // сделать добавление класса для плавного закрытия, а потом через stetimeout - remove из дом
}



