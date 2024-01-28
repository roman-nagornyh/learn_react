import {Component} from "react";

class TextAreaCounter extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
            countCallInsert: 0,
            countCallDelete: 0,
            countCallUpdate: 0,
            countCallFuture: 0,
        };

    }

    onTextChange(event) {
        this.setState({...this.state, text: event.target.value});
    }

    render() {
        const text = 'text' in this.state ? this.state.text : this.props.text;
        return (
            <div>
                <textarea value={text} onChange={event => this.onTextChange(event)}/>
                <h3>{text.length}</h3>
            </div>
        );
    }

    componentDidMount() {
        // Выполняется после первоначальной вставки компонента
        // В данном методе можно выполнить какую то подгрузуку данных
        console.log('Я выполняюсь после первоначальной вставки компонента');
        this.setState({...this.state, countCallInsert: this.state.countCallInsert + 1});

    }

    componentWillUnmount() {
        // В данном методе может выполняться любая отчистка объекта
        console.log('Выполнение перед удалением объекта');
        this.setState({...this.state, countCallDelete: this.state.countCallDelete + 1})

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Данный метод уже имеет новое значение состояния. Его можно использовать
        // сравнения текущего значения компонетна со старым
        console.log('Я работаю при обновлении компонента');
        this.setState({...this.state, countCallUpdate: this.state.countCallUpdate + 1});

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // В данном методе можно реализовать логику обновления компонента
        // и решить, обновлять его или нет
        // и тем самым провести оптимизацию реакт приложения
        console.log('В данном методе нам дается будущее состояние компонента');
        this.setState({...this.state, countCallFuture: this.state.countCallFuture + 1})

    }


}

export default TextAreaCounter;