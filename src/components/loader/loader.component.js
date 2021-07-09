import {Component} from "@/core/component";
import {createLoader} from "@/components/loader/loader.template";

export class LoaderComponent extends Component {
	constructor(id) {
		super(id)
	}

	get template () {
		return createLoader()
	}

	init() {
		this.$root.insert(this.template, 'beforeend')
	}
}