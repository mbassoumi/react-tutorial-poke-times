import React, {Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
    state = {
        name: 'yaseed',
    }
    changeName = (name) => {
        this.setState({
            name: name
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home} name={this.state.name}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/:post_id" component={Post}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
