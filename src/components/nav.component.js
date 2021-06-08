import {Component} from '@/core/component'
import {$} from "@/core/dom";

export class NavComponent extends Component {
    constructor(id) {
        super (id)
    }

    init() {
        this.$el.on('click', tabsHandler.bind(this))
    }

    selectTabs(tabs) {
        this.tabs = tabs
        if (localStorage.getItem('lastSelected')) {
            showLastTabAfterReload.call(this)
            showLastComponentAfterReload.call(this)
        }
    }
}

function tabsHandler(event) {
    if (event.target.classList.contains('nav__link')) {
        event.preventDefault()
        if (event.target.dataset.name !== 'search') {
            localStorage.setItem('lastSelected', event.target.dataset.name)
        }
        this.$el.findAll('.nav__link').forEach(tab => {
            tab.classList.remove('nav__link_active')
        })
        event.target.classList.add('nav__link_active')
        this.tabs.forEach(tab => tab.Component.hide())
        const activeTab = this.tabs.find(tab => tab.dataAttribute === event.target.dataset.name)
        document.querySelector('[data-type="search-form"]').classList.remove('header__search-form_active')
        const activeLink = $(document.querySelector('[data-name="search"]'))
        activeLink.addClass('hidden')
        activeTab.Component.show()
    }
}

function showLastTabAfterReload() {
    this.$el.findAll('.nav__link').forEach(tab => {
        tab.classList.remove('nav__link_active')
    })
    const acitveTabs = [...document.querySelectorAll('.nav__link')]
    const acitveTab = acitveTabs.find(link => link.dataset.name === localStorage.getItem('lastSelected'))
    acitveTab.classList.add('nav__link_active')
}

function showLastComponentAfterReload() {
    this.tabs.forEach( tab => tab.Component.hide())
    let activeTab = this.tabs.find(tab => tab.dataAttribute === localStorage.getItem('lastSelected'))
    activeTab = activeTab.Component.$el
    activeTab.removeClass('hidden')
}
