import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
   constructor(props){
       super(props)
       this.state={
        time:new Date()
       }
   }
   
   componentDidMount(){
       this.update=setInterval(()=>{
           this.setState({time:new Date().toLocaleTimeString})
       },1000)
   }
   componentWillUnmount(){
       clearInterval(this.update);
   }

    render() {

        return(
            <div id="root">
              <div className="Clock">
                <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>  
                </div> 
                </div>   
          
        )
    }
}


export default App;
