import React,{Component} from 'react';


export class Timer extends Component{
    state={
        timer:25
    }

    handleSetTimer=(evt)=>{
        
          this.setState({
              timer:evt.target.value
          })
    }

    render(){
    return(
    <div>
        <span>{this.state.timer}</span>
        <input type='number' value={this.state.timer} onChange={this.handleSetTimer} />
        <button>Старт</button>
        <button>Стоп </button>
        <button>Restart</button>
    </div>
    );
    }
}