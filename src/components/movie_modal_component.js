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
                        <img class="modal__img" src="./assets/icons/test2.jpg" alt="">
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
                        </div>
                        
                        <p class="modal__heading">Авторы</p>
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

        const swiper = new Swiper('.actors__slider', {
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

    document.querySelector('body')
        .classList.remove('stop-scroll')

    event.target.dataset.act === 'close' && this.remove()


    // сделать добавление класса для плавного закрытия, а потом через stetimeout - remove из дом
}



