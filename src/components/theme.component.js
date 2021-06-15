import {Component} from '@/core/component'
import {$} from "@/core/dom"
import {storage} from "@/core/utils";

export class ThemeComponent extends Component {
    constructor (id) {
        super(id)
    }

    init() {
        setThemeAfterReload.call(this)
        this.$el.on('click', themeHandler.bind(this))
    }
}

// function themeHandler() {
//
//     this.$el.toggle('toggler_active')
//     $(document.body).toggle('dark-theme')
//
//     localStorage.getItem('themePrefered') === 'dark'
//       ? localStorage.setItem('themePrefered', 'light')
//       : localStorage.setItem('themePrefered', 'dark')
// }
//
// function setThemeAfterReload() {
//
//     if (localStorage.getItem('themePrefered') === 'dark' ) {
//         this.$el.addClass('toggler_active')
//         $(document.body).addClass('dark-theme')
//     }
// }

function themeHandler() {
    console.log(storage('themePrefered'))
    this.$el.toggle('toggler_active')
    $(document.body).toggle('dark-theme')

    storage('themePrefered') === 'dark'
        ? storage('themePrefered', 'light')
        : storage('themePrefered', 'dark')
}

function setThemeAfterReload() {

    if (storage('themePrefered') === 'dark' ) {

        this.$el.addClass('toggler_active')
        $(document.body).addClass('dark-theme')
    }
}