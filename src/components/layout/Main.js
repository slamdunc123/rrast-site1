import React from 'react';
import { Switch, Route } from 'react-router-dom';

// view components
import About from '../views/About';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Posts from '../views/Posts';
import Users from '../views/Users';
import Cities from '../views/Cities';
import Teams from '../views/Teams';
import Numbers from '../views/Numbers';
import Players from '../views/Players';
import Todos from '../views/Todos';
import TodosFormApi from '../views/TodosFormApi';
import UsersFormApi from '../views/UsersFormApi';
import UsersFormApiRedux from '../views/UsersFormApiRedux';
import Form from '../views/Form';
import ApiPosts from '../views/ApiPosts';
import ApiUsers from '../views/ApiUsers';
import ApiComments from '../views/ApiComments';
import ApiTodos from '../views/ApiTodos';
import ApiBootswatches from '../views/ApiBootswatches';
import ApiOpenWeathers from '../views/ApiOpenWeathers';

import BootswatchesChanger from '../partials/BootswatchChanger'

const Main = () => {
    return(
        <div>
            Main
            <br/>
            <BootswatchesChanger />
            <br/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/posts" component={Posts} />
                <Route path="/users" component={Users} />
                <Route path="/cities" component={Cities} />
                <Route path="/teams" component={Teams} />
                <Route path="/numbers" component={Numbers} />
                <Route path="/players" component={Players} />
                <Route path="/todos" component={Todos} />
                <Route path="/todosformapi" component={TodosFormApi} />
                <Route path="/usersformapi" component={UsersFormApi} />
                <Route path="/usersformapiredux" component={UsersFormApiRedux} />
                <Route path="/form" component={Form} />
                <Route path="/apiposts" component={ApiPosts} />
                <Route path="/apiusers" component={ApiUsers} />
                <Route path="/apicomments" component={ApiComments} />
                <Route path="/apitodos" component={ApiTodos} />
                <Route path="/apibootswatches" component={ApiBootswatches} />
                <Route path="/apiopenweathers" component={ApiOpenWeathers} />
            </Switch>
        </div>
    )
}

export default Main;