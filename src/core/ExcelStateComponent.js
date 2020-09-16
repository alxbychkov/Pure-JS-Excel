import { ExcelComponent } from './ExcelComponent'

export class ExcelStateComponent extends ExcelComponent {
    constructor(...args) {
        super(...args)
    }
    get template() {
        console.log('getter', this.state)
        return JSON.stringify(this.state, null, 2)
    }
    initState(initialState = {}) {
        this.state = {...initialState}
    }
    setState(newState) {
        this.state = {...this.state, ...newState}
        console.log('this tempalte', this.template)
        this.$root.html(this.template)
    }
}
