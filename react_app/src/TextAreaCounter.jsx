import {Component} from "react";

class TextAreaCounter extends Component {

    constructor() {
        super();
        this.state = {};
        this.onTextChange = this.onTextChange.bind(this);

    }

    onTextChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <textarea value={this.state.text} onChange={event => this.onTextChange(event)}/>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        alert('Я работаю');
        console.log('componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate ', prevProps, prevState,
            snapshot);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return 'hello';
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate ', newProps, newState);
        return true;
    }


}

export default TextAreaCounter;