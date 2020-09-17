import React, { Component } from 'react';
import './App.css';
import Task from './components/Task/Task';
import Form from './components/Form/FormFunc';
import { render } from '@testing-library/react';
import Projects from './components/Projects/Projects';

class App extends Component {

  constructor() {
    super()
    this.state = {
      tasks: [],
      projects: [
        { name: 'TCC' },
        { name: 'PW' }
      ],
      filter: ''
    }
  }

  addTask(task) {
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  addProjects(project) {
    this.setState({ projects: [...this.state.projects, project] })
  }

  deleteTask(id) {
    let novoArray = this.state.tasks
    const index = newTasks.findIndex(task => task.id === id)
    novoArray.splice(index, 1)
    this.setState({ tasks: novoArray })
  }

  increment(id) {
    let newTasks = this.state.tasks
    const index = newTasks.findIndex(task => task.id === id)
    let task = this.state.tasks[index]
    task.status += 10
    if (task.status > 100) task.status = 100
    let novoArray = this.state.tasks
    novoArray.splice(index, 1, task)
    this.setState({ tasks: novoArray })
  }

  decrement(id) {
    let newTasks = this.state.tasks
    const index = newTasks.findIndex(task => task.id === id)
    let task = this.state.tasks[index]
    task.status -= 10
    if (task.status > 0) task.status = 0
    let novoArray = this.state.tasks
    novoArray.splice(index, 1, task)
    this.setState({ tasks: novoArray })
  }

  filter(project){
    this.setState({filter: project})
  }

  render() {
    return (
      <div className="container">
        <section>
          <h1>TASK</h1>
          <Form
            addTask={this.addTask.bind(this)}
            projects={this.state.projects}
          />
          <Projects
            projects={this.state.projects}
            addProject={this.addProjects.bind(this)}
            filter={this.filter.bind(this)}
          />
        </section>
        <section className="tasks">
          {this.state.tasks.filter(
            task => 
              task.project === this.state.filter || this.state.filter=== '' )
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={this.deleteTask.bind(this)}
              increment={this.increment.bind(this)}
              decrement={this.decrement.bind(this)}

            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
