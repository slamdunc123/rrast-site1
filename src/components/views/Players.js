import React, { Component } from 'react'

class Players extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: [
                'adam',
                'barry',
                'chaz'
            ]
        }
    }

    // add player
    addPlayer = (e) => {
        e.preventDefault();
        const { names } = this.state;
        const newPlayer = this.newPlayer.value;
        console.log('You clicked the add player button' + newPlayer)

        this.setState({
            names: [...names, newPlayer]
        })
        console.log(names)
        this.addForm.reset();

    }

    // delete player 
    deletePlayer = (selectedName) => {
        console.log('You clicked deletePlayer button for ' + selectedName)
        const remainingNames = this.state.names.filter(name => {
            return name !== selectedName;
        })
        this.setState({
            names: [...remainingNames]
        })
    }

    // edit player
    editPlayer = (selectedName) => {
        return (
            <div>
            {/* edit player */ }
            <form ref = {(input) => { this.addForm = input }
            } onSubmit = {(e) => this.updatePlayer(e)} className = "form-inline" >
                <div className="form-group">
                    <label htmlFor="" className="sr-only">Add player</label>
                    <input ref={(input) => { this.newPlayer = input }} type="text" className="form-control" placeholder="Add player"  />
                </div>
            <button type="submit" className="btn btn-primary">Update</button>
            </form >
            </div>
        )
    }

    updatePlayer = () => {
        console.log('Player updated')
    }

// // update player
// updatePlayer = (selectedName) => {
//     const {names} = this.state;
//     console.log('You clicked the updatePlayer button for ' + selectedName)
//     names.map(name => {
//         return name === selectedName;
//     })
//     console.log(this.name)
// }

render() {
    const { names } = this.state
    return (
        <div>
            <h1>Players</h1>

            {/* add players */}
            <form ref={(input) => { this.addForm = input }} onSubmit={(e) => this.addPlayer(e)} className="form-inline">
                <div className="form-group">
                    <label htmlFor="" className="sr-only">Add player</label>
                    <input ref={(input) => { this.newPlayer = input }} type="text" className="form-control" placeholder="Add player" id="player-name" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>


            {/* display players */}
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Names</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        names.map(name => {
                            return (
                                <tr key={name}>
                                    <th scope="row">1</th>
                                    <td>{name}</td>
                                    {/* delete player */}
                                    <td>
                                        <button className="btn btn-danger" type="button" onClick={(e) => this.deletePlayer(name)}>
                                            Delete
                                            </button>
                                    </td>
                                    {/* update player */}
                                    <td>
                                        <button className="btn btn-warning" type="button" onClick={(e) => this.editPlayer(name)}>
                                            Edit
                                            </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {console.log(names)}
        </div>
    )
}
}

export default Players
