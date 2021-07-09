import {Component} from '@/core/component'
import {setThemeAfterReload, themeHandler} from "@/components/theme/theme.functions"

export class ThemeComponent extends Component {
    constructor (id) {
        super(id)
    }

    init() {
        setThemeAfterReload.call(this)
        this.$el.on('click', themeHandler.bind(this))
    }
}
