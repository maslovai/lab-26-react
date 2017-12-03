import {React} from 'react';
import{ReactDom} from 'react-dom';

class App extends React.Component{
    render(){

    }
}
ReactDom.render(<App/>, document.getElementById('root'));

class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>Generate Cowsay Lorem</h1>
            </header>
        )
    }
}