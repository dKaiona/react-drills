import React, {Component} from 'react'

  class ArrayList extends Component {
      constructor(){
          super()
              this.state = {
                  listArray: ['hello', 'car', 'food', 'home', 'stick', 'drink']
              }
          
      }
      render() {
    return(
        <div>
            <h1>{this.state.listArray[0]}</h1>
            <h1>{this.state.listArray[1]}</h1>
            <h1>{this.state.listArray[2]}</h1>
            <h1>{this.state.listArray[3]}</h1>
            <h1>{this.state.listArray[4]}</h1>
            <h1>{this.state.listArray[5]}</h1>

        </div>
    )
}
  }
  export default ArrayList