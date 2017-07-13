import React, { Component } from 'react';

import Task from './Task.jsx';

export default class App extends Component {
    getTasks() {
        return [
            {_id: 1, titulo: 'lol1', text: 'this is task 1'},
            {_id: 2, titulo: 'lol2', text: 'this is task 2'},
            {_id: 3, titulo: 'lol3', text: 'this is task 3'},
        ];
    }
    renderTasks() {
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }
    render() {
        return (
            <div className="container">
                <header>
                    <h1>todo list</h1>
                </header>
                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}