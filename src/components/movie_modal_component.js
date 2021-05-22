export class MovieCardModal {

    create(json) {
        const modal = renderModal(json);
        console.log('Added')
        modal.addEventListener('click', modalHandler);

    }
}

function renderModal(json) {
    const modal = document.createElement('div');
    modal.classList.add('modal__movie-modal');
    modal.insertAdjacentHTML('afterbegin', `

                
        <div class="modal">
            <button class="btn">${json.title}</button>
        </div> 

    `);
    document.querySelector('body').insertAdjacentElement('beforeend', modal);
    return modal;
}

function modalHandler(event) {
    event.target.classList.contains('btn') && console.log('!!!');
}

