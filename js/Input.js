export const Input = class {
    constructor(text, onChange) {
        this.text = text
        this.onChange = onChange
    }
    render() {
        const input = document.createElement('input')
        input.value = this.text

        input.classList.add('task__input')

        input.addEventListener(
            'input', 
            (event) => this.onChange(event.target.value)
        )

        return input
    }
}

export default Input