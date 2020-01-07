import React, { Component } from 'react'
import './Timer.css'

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state=({
            timer:0,
            seconde:0,
            minute:0,
            heure:0,
            start:false
        });
        setInterval(()=>{
            if (this.state.start) {
        
        this.setState({
          timer: this.state.timer + 1,
          seconde: this.state.timer % 60,
          minute:Math.floor(this.state.timer / 60),
          heure: Math.floor(this.state.timer / 3600)
        });
      }
    console.log(this.state.timer)
    },1000);
  }
       startTimer=()=>{
        //    if(this.state.start===false){
        //    this.setState({start:true})}
        //    else{
        //    this.setState({start:false})}
        this.state.start===false?this.setState({start:true}):this.setState({start:false})
       }
resetTimer=()=>{
    this.setState({start:false,
    
        timer: 0,
        seconde:0,
        minute: 0,
        heure: 0
      })
}
    render() {
        return (
<div className="time">            
            <div className="timer">

            <div>

            <span >{String(this.state.heure).padStart(2, '0')}</span> :
            <p >
               Hour
            </p>
            </div>
            <div>

            <span >{String(this.state.minute).padStart(2, '0')}</span> :
            <p >
            Minute
            </p>
             </div>
             <div>

  	<span >{String(this.state.seconde).padStart(2, '0')}</span> 
      <p >
          Seconde
      </p>
      </div>
      </div>
 
      
  <div>
    <button type="button" onClick={this.startTimer} className="btn"> {this.state.start?"Start":"Stop"}</button>  
    <button type="button" onClick={this.resetTimer} className="btn">Reset</button>              

  </div>
</div>
        )
    }
}
