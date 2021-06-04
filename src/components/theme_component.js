import {Component} from '@/core/component'
import {$} from "@/core/dom"

export class ThemeComponent extends Component {
    constructor (id) {
        super(id)
    }

    init() {
        setThemeAfterReload.call(this)
        this.$el.on('click', themeHandler.bind(this))
    }
}

function themeHandler() {

    this.$el.toggle('toggler_active')
    $(document.body).toggle('dark-theme')

    localStorage.getItem('themePrefered') === 'dark'
      ? localStorage.setItem('themePrefered', 'light')
      : localStorage.setItem('themePrefered', 'dark')
}

function setThemeAfterReload() {

    if (localStorage.getItem('themePrefered') === 'dark' ) {
        this.$el.addClass('toggler_active')
        $(document.body).addClass('dark-theme')
    }
}