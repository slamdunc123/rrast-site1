import React, { Component } from 'react';

class Todo extends Component {

    constructor(props) {
        super(props);

    // initial state
        this.state = {
            add: true,
            edit: false,
            actions: true,
            id: null,
            message: '',
            mockData: [{
                id: '1',
                title: 'Buy Milk',
                done: false,
                date: new Date()
            }, {
                id: '2',
                title: 'Meeting with Ali',
                done: false,
                date: new Date()
            }, {
                id: '3',
                title: 'Tea break',
                done: false,
                date: new Date()
            }, {
                id: '4',
                title: 'Go for a run',
                done: false,
                date: new Date()
            }]
        }

        // this function call bindings
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    // handle add button click
    handleAdd(event) {
        event.preventDefault();

        let idNum = Math.floor((Math.random() * 1000) + 9999); // generate random number for id
        const { mockData } = this.state; //deconstructing state object
        const newTitle = event.target.item.value; //assign value of form input to a variable - in form where handleAdd is called
        const isOnTheList = mockData.find(objIndex => objIndex.title === newTitle); // checks for title in the mockData array - objIndex can be anything eg x or item
        if (newTitle !== ''){ //do if there is a value ie data input
            if (isOnTheList) { //do if data in list
                console.log('Already on list ' + newTitle)
                this.setState({
                    message: 'This is already on the list.'
                })
            } else { //do if data not in list
                console.log('Great a new title')
                this.setState({ //append new input data to state
                    mockData: [...this.state.mockData, {
                        id: idNum,
                        title: newTitle,
                        done: false,
                        date: new Date()
                    }],
    
                    message: 'New title added' //reset message
                });
            }

        } else {
            this.setState({ //do if there is not a value ie data input
                message: "Please enter a todo"
            })
        }
        

        event.target.item.value = ''; //reset input field
    }

    // handle delete button click
    handleDelete(id) {
        // let id = arguments[0];
        const { mockData } = this.state; //destructure state object
        const remainingTitles = mockData.filter(item => { //get list of items minus deleted one
            return item.id !== id; //return remaining items
             
        })
        this.setState({ //update state with remaining items
            mockData: [...remainingTitles]
        })
        console.log(this.state.mockData)
        console.log(id + ' deleted')
        if(remainingTitles.length === 0){ //do if there are no remaining items
            this.setState({
                message: "No items"
            })
        }
    }

    // handle edit button click
    handleEdit(id, title) {
        this.setState({
            add: false,
            edit: true,
            actions: false,
            // id: arguments[0],
            // title: arguments[1]
            id: id,
            title: title
        });
    }

    // hancdle update button click
    handleUpdate(event) {
        event.preventDefault();

        this.setState({
            mockData: this.state.mockData.map(item => {
                if (item.id === this.state.id) {
                    item['title'] = event.target.updatedItem.value;
                    // return item;
                }

                return item;
            })
        });

        this.setState({
            add: true,
            edit: false,
            actions: true
        });
    }

    // handle complete button click
    handleComplete(id) {
        // let id = arguments[0];

        this.setState({
            mockData: this.state.mockData.map(item => {
                if (item.id === id) {
                    item['done'] = true;
                    // return item;
                }

                return item;
            })
        });
    }

    // render add form
    renderAddForm(){
        if (this.state.add){
            return <form onSubmit={this.handleAdd}>
            <div className="form-group">
                <label className="" htmlFor="add-todo">Add Item &nbsp;</label>
                <input type="text" name="item" className="item" id="add-todo" />
                <button className="btn btn-primary btn-add-item">Add</button>
            </div>
        </form>
        }
    }

    // render edit form
    renderEditForm() {
        if (this.state.edit) {
            return <form onSubmit={this.handleUpdate}>
            <label className="" htmlFor="edit-todo">Edit Item &nbsp;</label>
                <input type="text" name="updatedItem" className="item" id="edit-todo" defaultValue={this.state.title} />
                <button className="btn btn-primary update-add-item">Update</button>
            </form>
        }
    }

    // render todos table
    renderTodosTable(){
        if (this.state.actions) {
            return <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Todo</th>
                    {/* <th>Date</th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {this.state.mockData.map(item => {
                return (
                   
                    <tr key={item.id} className={item.done ? 'done' : 'hidden'}>
                        <th scope="row">1</th>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        {/* <td>{item.date}</td> */}
                        {/* include an arrow function to prevent the call firing straigh away */}
                        <td><button onClick={() => this.handleDelete(item.id)} className="btn btn-danger">Delete</button></td> 
                        <td><button onClick={() => this.handleEdit(item.id, item.title)} className="btn btn-warning">Edit</button></td>
                        <td><button onClick={() => this.handleComplete(item.id)} className="btn btn-info">Complete</button></td>
                    </tr>
                )
            })}
        </tbody>
        </table>
        }
    }

    // main component render
    render() {
        const { mockData, message } = this.state;
        // if(!this.state.add){

        // }
        return (
            <div className="container">
                <h3>Todos</h3>
                {/* these 2 functions are called straight away to render the add and edit forms - they will only render if their state is true */}
                {this.renderEditForm()}
                {this.renderAddForm()}
                
                
                <div className="content">
                    {
                        (message !== '' || mockData.length === 0) && <p className="message text-danger">{message}</p>
                    }
                    {/* call for todos table to be rendered */}
                    {this.renderTodosTable()}
                </div>
            </div>
        );
    }
}

export default Todo;
