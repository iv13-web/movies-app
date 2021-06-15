import {$} from "@/core/dom"
import {Component} from '@/core/component'
import {setThemeAfterReload, themeHandler} from "@/components/theme/theme.functions"

export class ThemeComponent extends Component {
    constructor (id) {
        super(id)
    }

    prepare() {
        this.page = $(document.body)
    }

    init() {
        setThemeAfterReload.call(this)
        this.$el.on('click', themeHandler.bind(this))
    }
}
