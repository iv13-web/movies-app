export class MovieCardModal {

    create(json) {


        const modal = document.createElement('div');
        modal.classList.add('modal__movie-modal');
        modal.insertAdjacentHTML('afterbegin', `
    
                    
            <div class="modal">
                <button class="btn">${json.title}</button>
            </div> 
    
        `);

        document.querySelector('body').insertAdjacentElement('beforeend', modal);

        modal.addEventListener('click', modalHandler);

        return modal;
    }


}

function modalHandler(event) {
    event.target.classList.contains('btn') && this.remove();




    // сделать добавление класса для плавного закрытия, а потом через stetimeout - remove из дом
}



