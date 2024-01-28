
const FuncApp = function (props) {

    const {name, age} = props;
    return (
        <>
            <h5>Меня зовут { name ? name:''} , мне {age} лет</h5>
        </>
    )
}
FuncApp.defaultProps = {
    age:100,
}
export default FuncApp;