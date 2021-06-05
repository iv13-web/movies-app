export class MovieCardModal {

    static create(json) {

        // const duration = json.collapse === undefined
        //     ? 'данных нет'
        //     : json.collapse.duration[0];
        //
        // const screenshots = json.screenshots === undefined
        //     ? json.frames
        //     : json.screenshots;

        const modal = document.createElement('div')
        modal.classList.add('modal__overlay');
        modal.setAttribute('data-act', 'close' )
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal__overlay" data-act="close">
                <div class="modal__window">
                    <div class="modal__window-top">
                        <img class="modal__img" src="./assets/icons/test2.jpg" alt="">
                        <div class="modal__additions">
                            <span class="modal__additions-title">${json.details.title}</span>
                            <span>Год:&nbsp;</span> 
                            <span>Время:&nbsp;</span>
                            <span>Страна:&nbsp;</span>
                            <span>Рейтинг:&nbsp;</span>
                            <span>Голоса:&nbsp;</span>
                        </div>
                    </div>
                    <div class="modal__buttons">
                        <div class="modal__buttons_like"><i class="far fa-heart"></i>Сохранить</div>
                        <div class="modal__buttons_seen"><i class="fas fa-eye"></i>Отметить</div>
                    </div>
                    <div class="modal__window-wrapper">
                        <div class="modal__window-bottom">
                            <p class="modal__heading-plot">Сюжет</p>
                            <p class="modal__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus cum dolorum iure iusto laudantium, mollitia nam nobis sapiente suscipit.</p>
                            <p class="modal__heading-cast">Актеры</p>
                            <div class="modal__slider">
                                <div class="swiper-container actors__slider">
                                    <div class="swiper-wrapper">
                                    
                                        <div class="swiper-slide">
                                            <div class="modal__cast-wrapper">
                                                <img src="./assets/icons/actor.jpg" alt="">
                                                <p class="modal__cast-name">Натали Портман</p>
                                                <p class="modal__cast-role">РольРоль</p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="modal__cast-wrapper">
                                                <img src="./assets/icons/actor.jpg" alt="">
                                                <p class="modal__cast-name">Натали Портман</p>
                                                <p class="modal__cast-role">РольРоль</p>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="modal__cast-wrapper">
                                                <img src="./assets/icons/actor.jpg" alt="">
                                                <p class="modal__cast-name">Натали Портман</p>
                                                <p class="modal__cast-role">РольРоль</p>
                                            </div>
                                        </div>
                                        
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
                            <p class="modal__heading-creators">Авторы</p>
                            <div class="modal__slider">
                                <div class="swiper-container creators__slider">
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
                            <p class="modal__heading-similar">Похожие фильмы</p>
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
                </div>
            </div>
        `);

        document.querySelector('body').insertAdjacentElement('beforeend', modal);

        const swiper = new Swiper('.actors__slider', {
            slidesPerView: 2,
            spaceBetween: 20,
            // clickable: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        modal.addEventListener('click', close);
        return modal;
    }
}

function close(event) {

    document.querySelector('body')
        .classList.remove('stop-scroll');

    event.target.dataset.act === 'close' && this.remove();


    // сделать добавление класса для плавного закрытия, а потом через stetimeout - remove из дом
}



