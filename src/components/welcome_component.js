import {Component} from '@/core/component';

export class WelcomeComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        localStorage.getItem('wasVisited')
            ? this.hide()
            : this.show()
    }

    onShow() {
        this.$el.find('.welcome__button').on('click', btnHandler.bind(this));
    }

    onHide() {
        this.$el.find('.welcome__button').off('click', btnHandler)
    }
}

function btnHandler() {
    localStorage.setItem('wasVisited', new Date().toLocaleDateString())
    this.$el.remove();
}
