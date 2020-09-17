import React from 'react';
import { useState } from 'react';
import './style.css'

const Form = (props) => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState();
    const [status, setStatus] = useState(0);
    const [project, setProject] = useState();

    const handleSubmit = e => {
        e.preventDefault()
        const task = {id: Date.now(),title, description, status, project}
        props.addTask(task)

    }

    return (
        <form className="form" onSubmit={handleSubmit}>

        <input 
            value={title}
            type="text"
            placeholder="title"
            onChange={e => setTitle(e.target.value)}
                    
                />
        <textarea 
            placeholder="descrição"
            onChange={e => setDescription(e.target.value)}        
                />
        <select onChange={e => setProject(e.target.value)}>
                    {props.projects.map(project => <option>{project.name}</option>)}
        </select>
                
        <button>salvar</button>
                
    </form>

    );
}








export default Task;