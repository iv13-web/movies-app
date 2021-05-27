import {Component} from '../core/component';

export class WelcomeComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        // пустой lS вернет null
        this.getFromlocalStorage('wasVisited') && this.hide();
        
        const btn = document.querySelector('.welcome__button');

        // .bind(this) для доступа к hide() внутри Copmonent
        btn.addEventListener('click', btnHandler.bind(this));
    }

}

function btnHandler() {
    this.savelocalStorage('wasVisited', new Date().toLocaleDateString());
    this.$el.remove();
}
