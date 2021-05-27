import {Component} from '../core/component';

export class ThemeComponent extends Component {
    constructor (id) {
        super(id);
    }

    init() {
        setThemeAfterReload.bind(this)();
        this.$el.addEventListener('click', themeHandler.bind(this));
    }
}

function themeHandler() {

    this.$el.classList.toggle('toggler_active');
    document.body.classList.toggle('dark-theme');

    this.getFromlocalStorage('themePrefered') === 'dark' 
      ? this.savelocalStorage('themePrefered', 'light')  
      : this.savelocalStorage('themePrefered', 'dark');

}

function setThemeAfterReload() {

    if (this.getFromlocalStorage('themePrefered') === 'dark' ) {
        this.$el.classList.add('toggler_active');
        document.body.classList.add('dark-theme');
    }
}