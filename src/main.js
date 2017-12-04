import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';
// console.log(say({ text: 'grazing in the browser' }));

import './style/main.scss';

class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>Generate Cowsay Lorem</h1>
            </header>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);

        this.generateSay = this.generateSay.bind(this);

        this.state = {
            content: say({
            text: "Moo"
        })
    }
}

    generateSay(){
        this.setState({
            content: say({
            text:(faker.fake("{{lorem.paragraph}}"))
        })
      })
    }

    render(){
    return (
        <div>
            <div id="cowhouse">
                <Header />
                <pre>{this.state.content}</pre>
                <button onClick={this.generateSay}>click me</button>
            </div>
        </div>
    )
    }   
}


ReactDom.render(<App/>, document.getElementById('root'));
