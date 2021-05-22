import {Component} from '../core/component';

export class MovieCardModal extends Component {
    

    static create(json) {
        const modal = document.createElement('div');
        modal.classList.add('modal__movie-modal');
        modal.insertAdjacentHTML('afterbegin', `

            <div class="modal-overlay" data-close="close">
                <div class="modal-window">
                    <div class="modal-header">
                        <div class="modal-header-title">${json.title || ''}</div>
                        <div class="modal-header-date">${json.date}</div>
                    </div>
                    <hr>
                    <div class="modal-body">
                        <div class="modal-body-title" data-subtitle>${json.subtitle || ''} ${json.date}:</div>
                        <img class="modal-img" src="${json.src || ''}" alt="">
                        <p class="modal-text" data-content>
                            ${json.content || ''}
                        </p>
                    </div>
                    ${json.closable ? `<div class="modal-close" data-close="close"></div>` : ''}  
                </div>
            </div>

        `);
    }

    // initListener ($el,callback, className) {
    //     $el.addEventListener('click', (event) => {
    //         if (event.target.classList.toString().includes(className)) {
    //             callback();
    //         }
    //     });
    // }

    log(obj) {
        console.log(obj)
    }
}



// найти в бд