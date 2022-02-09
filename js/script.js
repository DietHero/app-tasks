import {Button} from './Button.js'
import {Input} from './Input.js'

const input1 = new Input ('text', (newText) => console.log(newText))
const button1 = new Button('Add', () => alert('Click'))
document.body.appendChild(input1.render())
document.body.appendChild(button1.render())


