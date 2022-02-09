import { ToDo } from './ToDo.js'

const toDo1 = new ToDo([
    { text: 'Wynieść śmieci', isCompleted: false },
    { text: 'Umyj naczynia', isCompleted: true },

])

document.body.appendChild(toDo1.render())