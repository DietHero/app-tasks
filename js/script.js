import {Button} from './Button.js'


const button1 = new Button('Add', () => alert('Click'))
document.body.appendChild(button1.render())