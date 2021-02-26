import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
   constructor(props){
       super(props)
       this.state={
        time:new Date().toLocaleTimeString()
       }
       this.updateDate=this.updateDate.bind(this);
   }
   updateDate(){
     let date=new Date();
     let hrs=date.getHours();
     let min=date.getMinutes();
     let sec=date.getSeconds();

     let amPm=hrs<12?'AM':'PM';
     if(min<10){
         min=`0${min}`;
     }
     if(sec<10){
         sec=`0${sec}`;
     }
     if(sec>59){
         sec=`0`;
         min=`{(Number)min+1}`
     }
     if(min>59){
         min=`0`;
         hrs=`{(Number)hrs+1}`
     }
     let ans=`${hrs}:${min}:${sec}${amPm}`;
     this.setState({time:ans});

   }

   componentDidMount(){
       this.update=setInterval(this.updateDate,1000)
   }
   componentWillUnmount(){
       clearInterval(this.update);
   }

    render() {

        return(
            <div id="root">
              <div className="Clock">
                <h3 id="time">{this.state.time}</h3>  
                </div> 
                </div>   
          
        )
    }
}


export default App;
