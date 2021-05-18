import {Component} from '../core/component';

export class ThemeComponent extends Component {
    constructor (id) {
        super(id);
    }

    init() {
        setThemeAfterReload.bind(this)();
        this.listen('click', themeHandler.bind(this));
    }
}

function themeHandler() {

    this.$element.classList.toggle('toggler_active');
    document.body.classList.toggle('dark-theme');

    this.getFromlocalStorage('theme') === 'dark' 
      ? this.savelocalStorage('theme', 'light')  
      : this.savelocalStorage('theme', 'dark');
}

function setThemeAfterReload() {

    if (this.getFromlocalStorage('theme') === 'dark' ) {
        this.$element.classList.add('toggler_active');
        document.body.classList.add('dark-theme');
    }
}