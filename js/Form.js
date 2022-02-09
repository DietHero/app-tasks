import { Input } from './Input.js'
import { Button } from './Button.js'

export const Form = class {

    constructor(initialValue, onSubmit) {
        this.initialValue = initialValue
        this.onSubmit = onSubmit
        this.value = initialValue
    }
    render() {
        const form = document.createElement('form')
        const input = new Input(
            this.initialValue, 
            (value) => this.value = value)
        const button = new Button('Add')

        form.addEventListener(
            'submit', 
            (event) => {
                event.preventDefault()
                this.onSubmit(this.value)
            }
        
        )
        form.classList.add('task__form')
        form.appendChild(input.render())
        form.appendChild(button.render())
        return form
    }
}

export default Form