import React, { Component } from 'react';
class Time extends Component {
    state={
        date:new Date()
    };
    
    timer(){
        setInterval(() => {
            this.setState({date:new Date()})
            
        }, 1000);
      
    }
    render() { 
        return( 
        <div
        
        style={{
            display: "grid",
            justifyContent: "center",       
          }}
        >
            <h1>Current Time</h1>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            {this.timer()}             
        </div>
        );
    }
}
 
export default Time;
