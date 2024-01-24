import React, { Component } from 'react';

class Date extends Component {
    constructor(){
        super();
           this.state={
               h:0,
               m:0,
                s:0
        }
    }
    // increment=()=>{
    //     this.setState({count:this.state.count+1})
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({s:this.state.s+1})
        },25)
    }
    componentDidUpdate(){
        if(this.state.s=== 60){
            this.state.s=0;
           this.state.m=this.state.m+1;
           if(this.state.m==60){
           this.state.m=0;
           this.state.h+=1;
           }
        }
    }
    render() {
       
        return (
            <div>
                <h1>STOP WATCH</h1>
                <h2>{this.state.h}:{this.state.m}:{this.state.s}</h2>
                
            </div>
        );
    }
}


export default Date;
