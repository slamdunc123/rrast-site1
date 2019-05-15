import React, { Component } from 'react';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            add: true,
            edit: false,
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
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
        this.onDeleteHandle = this.onDeleteHandle.bind(this);
        this.onEditHandle = this.onEditHandle.bind(this);
        this.onUpdateHandle = this.onUpdateHandle.bind(this);
        this.onCompleteHandle = this.onCompleteHandle.bind(this);
    }

    onSubmitHandle(event) {
        event.preventDefault();

        let idNum = Math.floor((Math.random() * 1000) + 9999); // generate random number for id
        const { mockData } = this.state;
        const newTitle = event.target.item.value;
        const isOnTheList = mockData.find(objIndex => objIndex.title === newTitle); // looks for title in the mockData array - objIndex can be anything eg x or item
        if (newTitle !== ''){
            if (isOnTheList) {
                console.log('Already on list ' + newTitle)
                this.setState({
                    message: 'This is already on the list.'
                })
            } else {
                console.log('Great a new title')
                this.setState({
                    mockData: [...this.state.mockData, {
                        id: idNum,
                        title: newTitle,
                        done: false,
                        date: new Date()
                    }],
    
                    message: ''
                });
            }

        } else {
            this.setState({
                message: "Please enter a todo"
            })
        }
        

        event.target.item.value = '';
    }

    onDeleteHandle(id) {
        // let id = arguments[0];
        const { mockData } = this.state;
        const remainingTitles = mockData.filter(item => {
            return item.id !== id;
             
        })
        this.setState({
            mockData: [...remainingTitles]
        })
        console.log(this.state.mockData)
        console.log(id + ' deleted')
        if(remainingTitles.length === 0){
            this.setState({
                message: "No items"
            })
        }
        
        
    }

    onEditHandle(id, title) {
        this.setState({
            add: false,
            edit: true,
            // id: arguments[0],
            // title: arguments[1]
            id: id,
            title: title
        });
    }

    onUpdateHandle(event) {
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
            edit: false
        });
    }

    onCompleteHandle(id) {
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

    renderAddForm(){
        if (this.state.add){
            return <form onSubmit={this.onSubmitHandle}>
            <div className="form-group">
                <label className="" htmlFor="add-todo">Add New Item</label>
                <input type="text" name="item" className="item" id="add-todo" />
                <button className="btn btn-primary btn-add-item">Add</button>
            </div>
        </form>
        }
    }

    renderEditForm() {
        if (this.state.edit) {
            return <form onSubmit={this.onUpdateHandle}>
                <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
                <button className="btn btn-primary update-add-item">Update</button>
            </form>
        }
    }

    renderTodosTable(){
        if (this.state.actions) {
            return <form onSubmit={this.onUpdateHandle}>
                <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
                <button className="btn btn-primary update-add-item">Update</button>
            </form>
        }
    }

    render() {
        const { mockData, message } = this.state;
        if(!this.state.add){

        }
        return (
            <div>
                <h3>Todos</h3>
                {/* these 2 functions are called straight away to render the add and edit forms - they will only render if their state is true */}
                {this.renderEditForm()}
                {this.renderAddForm()}
                
                <div className="content">
                    {
                        (message !== '' || mockData.length === 0) && <p className="message text-danger">{message}</p>
                    }
                    <table className="table">
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
                                        <td><button onClick={() => this.onDeleteHandle(item.id)} className="btn btn-danger">Delete</button></td> 
                                        <td><button onClick={() => this.onEditHandle(item.id, item.title)} className="btn btn-warning">Edit</button></td>
                                        <td><button onClick={() => this.onCompleteHandle(item.id)} className="btn btn-info">Complete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Todo;
