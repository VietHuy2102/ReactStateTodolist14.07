import React from "react";
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count:0}
    }
    render() {

        const upCount = () =>{

            this.setState({
                count: this.state.count + 1
            })
        }
        const downCount = () =>{
            this.setState({
                count: this.state.count - 1
            })
        }
        return(
            <>
                <h1>Count: {this.state.count}</h1>
                <button className="down" onClick={downCount}>-</button>
                <button className="up" onClick={upCount}>+</button>
            </>
        )
    }
}
export default Counter
