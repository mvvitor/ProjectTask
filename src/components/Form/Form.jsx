import React, { Component } from 'react';

import './style.css'

class Form extends Component {

    constructor() {
        super()
        this.state = {
            id: 0,
            title: "",
            description: "",
            status: 0,
            project: ""
        };
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value })
    }

    handleChangeDescription(event) {
        this.setState({ description: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({id: Date.now()})
        this.props.addTask(this.state)
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text"
                    placeholder="title"
                    onChange={this.handleChangeTitle.bind(this)}
                />
                <textarea placeholder="descrição"
                    onChange={this.handleChangeDescription.bind(this)}
                />
                <select>
                    {this.props.projects.map(project => <option>{project.name}</option>)}
                </select>
                
                <button>salvar</button>
                
            </form>
        );
    }
}

export default Form;
