import {Component} from '@/core/component';

export class WelcomeComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        localStorage.getItem('wasVisited') && this.hide();
        const btn = document.querySelector('.welcome__button');
        btn.addEventListener('click', btnHandler.bind(this));
    }
}

function btnHandler() {
    localStorage.setItem('wasVisited', new Date().toLocaleDateString())
    this.$el.remove();
}
