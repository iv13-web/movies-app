import {Component} from '../core/component';
import {$} from "@/core/dom";

export class ThemeComponent extends Component {
    constructor (id) {
        super(id);
        this.body = $(document.body)
    }

    init() {
        setThemeAfterReload.bind(this)();
        this.$el.on('click', themeHandler.bind(this));
    }
}

function themeHandler() {

    this.$el.toggle('toggler_active');
    this.body.toggle('dark-theme');

    localStorage.getItem('themePrefered') === 'dark'
      ? localStorage.setItem('themePrefered', 'light')
      : localStorage.setItem('themePrefered', 'dark');
}

function setThemeAfterReload() {

    if (localStorage.getItem('themePrefered') === 'dark' ) {
        this.$el.addClass('toggler_active');
        this.body.addClass('dark-theme');
    }
}