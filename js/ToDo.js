import { Task } from './Task.js'
import { Form } from './Form.js'

export class ToDo {

    constructor(tasks) {
        this.tasks = tasks || []
        this.container = null

    }

    deleteTask(indexToDelete) {
        this.tasks = this.tasks.filter((taskData, index) => {
            return index !== indexToDelete
        })
        this.render()
    }

    addTask(text) {
        const newTaskData = {
            text: text,
            isCompleted: false,
        }
        this.tasks = this.tasks.concat(newTaskData)
        this.render()
    }

    toggleComplete(indexToComplete) {
        this.tasks = this.tasks.map((taskData, index) => {

            if (index !== indexToComplete) return taskData
            return {
                text: taskData.text,
                isCompleted: !taskData.isCompleted
            }
        })
        this.render()

    }

    renderTasks() {
        this.tasks.forEach((taskData, index) => {
            const task = new Task(
                taskData,
                () => this.toggleComplete(index),
                () => this.deleteTask(index)
            )
            this.container.appendChild(task.render())
        })
    }

    render() {
        if (this.container === null) {
            this.container = document.createElement('div')
        }
        this.container.innerHTML = ''
        this.container.classList.add('main')
        const form = new Form('', (value) => this.addTask(value))

        this.container.appendChild(form.render())

        this.renderTasks()

        return this.container


    }
}