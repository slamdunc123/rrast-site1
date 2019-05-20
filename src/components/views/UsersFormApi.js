import React from 'react';
import axios from 'axios';

class UsersFormApi extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            add: true,
            edit: false,
            actions: true,
            id: null,
            message: '',
            users: []
        }

         // this function call bindings
         this.handleAdd = this.handleAdd.bind(this);
         this.handleDelete = this.handleDelete.bind(this);
         this.handleEdit = this.handleEdit.bind(this);
         this.handleUpdate = this.handleUpdate.bind(this);
         this.handleComplete = this.handleComplete.bind(this);
     
    }
    
    // api data
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data;
            this.setState({
                users
            })
        })
    }

    // handle add event
    handleAdd(event) {
        event.preventDefault();

        let idNum = Math.floor((Math.random() * 1000) + 9999); // generate random number for id
        const { users } = this.state; //deconstructing state object
        const newUsername = event.target.item.value; //assign value of form input to a variable - in form where handleAdd is called
        const isOnTheList = users.find(objIndex => objIndex.username === newUsername); // checks for username in the users array - objIndex can be anything eg x or item
        if (newUsername !== ''){ //do if there is a value ie data input
            if (isOnTheList) { //do if data in list
                console.log('Already on list ' + newUsername)
                this.setState({
                    message: 'This is already on the list.'
                })
            } else { //do if data not in list
                console.log('Great a new username')
                this.setState({ //append new input data to state
                    users: [...this.state.users, {
                        id: idNum,
                        username: newUsername,
                        completed: false,
                        // email: 'test@test.com'
                        // date: new Date()
                    }],
    
                    message: '' //reset message
                });
            }

        } else {
            this.setState({ //do if there is not a value ie data input
                message: "Please enter a todo"
            })
        }
        

        event.target.item.value = ''; //reset input field
    }
    // handle delete event
    handleDelete(id){
        // let id = arguments[0];
        const { users } = this.state; //destructure state object
        const remainingusernames = users.filter(item => { //get list of items minus deleted one
            return item.id !== id; //return remaining items
             
        })
        this.setState({ //update state with remaining items
            users: [...remainingusernames]
        })
        console.log(this.state.users)
        console.log(id + ' deleted')
        if(remainingusernames.length === 0){ //do if there are no remaining items
            this.setState({
                message: "No items"
            })
        }
    }

    // handle edit button click
    handleEdit(id, username) {
        this.setState({
            add: false,
            edit: true,
            actions: false,
            // id: arguments[0],
            // username: arguments[1]
            id: id,
            username: username
        });
    }

    // handle update button click
    handleUpdate(event) {
        event.preventDefault();

        this.setState({
            users: this.state.users.map(item => {
                if (item.id === this.state.id) {
                    item['username'] = event.target.updatedItem.value;
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
            users: this.state.users.map(item => {
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
                <input type="text" name="updatedItem" className="item" id="edit-todo" defaultValue={this.state.username} />
                <button className="btn btn-primary update-add-item">Update</button>
            </form>
        }
    }

    // render users table
    renderusersTable(){
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
            {this.state.users.map(item => {
                return (
                   
                    <tr key={item.id} className={item.done ? 'done' : 'hidden'}>
                        <th scope="row">1</th>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        {/* <td>{item.date}</td> */}
                        {/* include an arrow function to prevent the call firing straigh away */}
                        <td><button onClick={() => this.handleDelete(item.id)} className="btn btn-danger">Delete</button></td> 
                        <td><button onClick={() => this.handleEdit(item.id, item.username)} className="btn btn-warning">Edit</button></td>
                        <td><button onClick={() => this.handleComplete(item.id)} className="btn btn-info">Complete</button></td>
                    </tr>
                )
            })}
        </tbody>
        </table>
        }
    }
    
    render() {
        const { users, message } = this.state;
        console.log(users);
        // if(!this.state.add){

        // }
        return (
            <div className="container">
                <h3>UsersFormApi</h3>
                {/* these 2 functions are called straight away to render the add and edit forms - they will only render if their state is true */}
                {this.renderEditForm()}
                {this.renderAddForm()}
                
                
                <div className="content">
                    {
                        (message !== '' || users.length === 0) && <p className="message text-danger">{message}</p>
                    }
                    {/* call for users table to be rendered */}
                    {this.renderusersTable()}
                </div>
            </div>
        );
    }
}

export default UsersFormApi

