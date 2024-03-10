import React, { Component } from 'react'
class Counter extends Component {
    constructor(){
        super()

        this.state={
            count:0
        }
    }

    increment(){
        // this.setState({
        //     count: this.state.count+1
        // },     ()=>console.log("Callback Value"+ this.state.count))
        // console.log(this.state.count)

        this.setState((preState)=>(
            {
                count:preState.count+1
            }
        ))
    }
    incrementThree(){
        this.increment()
        this.increment()
        this.increment()
        //this.increment()
        //this.increment()
    }
  render() {
    return (
      <div><center><h1>Counter: {this.state.count}</h1>
      <button class="button-89" type="button" onClick={()=>this.incrementThree()}>Increment</button></center></div>

    )
  }
}

export default Counter