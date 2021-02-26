import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
   constructor(props){
       super(props)
       this.state={
        time:Date.now()
       }
   }
   componentDidMount(){
       this.state.time;
   }
    render() {

        return(
            <div id="root">
              <div className="Clock">
                <h3 id="time">{this.state.time.toLocaleString()}</h3>  
                </div> 
                </div>   
          
        )
    }
}


export default App;
