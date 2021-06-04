import {Component} from '@/core/component'

export class NavComponent extends Component {
    constructor(id) {
        super (id)
        // создал this.tabs, чтобы перезаписать через transferTabs()
        this.tabs = []
    }

    init() {
        this.$el.on('click', tabsHandler.bind(this))
    }

    selectTabs(tabs) {
        // прокинул из index.js, чтобы получить доступ к компонентам
        this.tabs = tabs

        if (localStorage.getItem('lastSelected')) {

            setActiveTabAfterReload.call(this)
            setActiveComponentAfterReload.call(this)
        }
    }
}

function tabsHandler(event) {

    if (event.target.classList.contains('nav__link')) {

        event.preventDefault()
        localStorage.setItem('lastSelected', event.target.dataset.name)
        this.$el.findAll('.nav__link').forEach(tab => {
            tab.classList.remove('nav__link_active')
        })
        event.target.classList.add('nav__link_active')
        this.tabs.forEach( tab => tab.Component.hide())
        const activeTab = this.tabs.find(tab => tab.dataAttribute === event.target.dataset.name)
        activeTab.Component.show()
    }
}

function setActiveTabAfterReload() {

    this.$el.findAll('.nav__link').forEach(tab => {
        tab.classList.remove('nav__link_active')
    })

    // const acitveTabs = Array.from(document.querySelectorAll('.nav__link'))
    const acitveTabs = [...document.querySelectorAll('.nav__link')]
    const acitveTab = acitveTabs.find(link => link.dataset.name === localStorage.getItem('lastSelected'))
    acitveTab.classList.add('nav__link_active')
}

function setActiveComponentAfterReload() {

    this.tabs.forEach( tab => tab.Component.hide())
    let activeTab = this.tabs.find(tab => tab.dataAttribute === localStorage.getItem('lastSelected'))
    activeTab = activeTab.Component.$el
    activeTab.removeClass('hidden')
}
