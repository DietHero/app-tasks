import {Button} from './Button.js'
import {Input} from './Input.js' 
import {Task} from './Task.js'

const input1 = new Input ('text', (newText) => console.log(newText))
const button1 = new Button('Add', () => alert('Click'))
const task1 = new Task({text:'Wymieść śmieci', isCompleted: false}, () => alert('Completed'), () =>alert('Deleted'))
const task2 = new Task({text:'Umyj naczynia', isCompleted: true}, () => alert('Completed'), () =>alert('Deleted'))
document.body.appendChild(input1.render())
document.body.appendChild(button1.render())
document.body.appendChild(task1.render())
document.body.appendChild(task2.render())


