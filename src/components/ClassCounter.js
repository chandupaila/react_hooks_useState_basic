import {Component} from  'react'


export class ClassCounter extends Component {
    state = {count:0}

    onIncrement = () => {
        this.setState(prevState =>({
            count:prevState.count+1
        }))
    }
    render(){
        const{count} = this.state
        return (
            <>
            <h1>class component</h1>
            <button onClick={this.onIncrement}>Count:{count}</button>
            </>
        )
    }
}

