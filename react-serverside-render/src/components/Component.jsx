const React = require('react');

class App extends React.Component {
    handleClick() {
        alert('Hey, soy un click guapo');
    }
    render() {
        return (
            <div>
                <h1>Hola Mundo con React</h1>
                <p>lorem ipsum</p>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

module.exports = App;
