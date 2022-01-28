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
        <div>
            <h1>Current Time</h1>
            <h2> {this.state.date.toLocaleTimeString()}</h2>
            {this.timer()}             
        </div>
        );
    }
}
 
export default Time;
