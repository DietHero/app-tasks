import {Button} from './Button.js'
import {Input} from './Input.js' 
import {Task} from './Task.js'
import { Form } from './Form.js'

const form1 = new Form('Task', (value) => alert(value))
const task1 = new Task({text:'Wymieść śmieci', isCompleted: false}, () => alert('Completed'), () =>alert('Deleted'))
const task2 = new Task({text:'Umyj naczynia', isCompleted: true}, () => alert('Completed'), () =>alert('Deleted'))
document.body.appendChild(form1.render())
document.body.appendChild(task1.render())
document.body.appendChild(task2.render())



