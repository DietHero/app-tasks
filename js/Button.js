export const Button = class {
    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }
    render() {
        const button = document.createElement('button')

        button.innerText = this.label

        button.classList.add('add__button')

        button.addEventListener(
            'click',
           () => this.onClick()
        )
        return  button
    }
}
export default Button