import {Button } from './Button.js'
export const Task = class {
    constructor(task, onComplete, onDelete) {
        this.task = task
        this.onComplete = onComplete
        this.onDelete = onDelete

    }
    render() {
        const container = document.createElement('div')
        container.classList.add('tasks__container')

        const buttonContainer = document.createElement('div')


        const p = document.createElement('p')
        p.innerText = this.task.text
        p.classList.add('task')

        const completeButton = new Button('OK', this.onComplete )
        const deleteButton = new Button('X', this.onDelete )

        if (this.task.isCompleted === true) {
            p.classList.add('task__completed')
        }
 
        container.appendChild(p)
        container.appendChild(buttonContainer)
        buttonContainer.appendChild(completeButton.render())
        buttonContainer.appendChild(deleteButton.render())

        return container
    }
}

export default Task