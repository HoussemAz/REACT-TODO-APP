import React, { Component } from 'react'

export default class todo extends Component {
    state={
       input:"" ,
        list:[]
           
    }
     
    handelinput=(event)=> {
        this.setState({input:event.target.value});
      }
    handeladd=(event)=> {
        this.setState({list:this.state.list.concat({text:this.state.input, isComplete: false}),input:""});
      }
   
    handeldelete=(i)=>{
        this.setState({list:this.state.list.filter((el,index)=>index!==i)})

    }
    handelcomplete=(i)=>{
  
    this.setState({list:this.state.list.map((el,index)=>(index===i)?{...el,isComplete:!el.isComplete}:el)
      });
    
}
      
    render() { 
  
       
        return (
         <div> 
        <div className='request'>
            <div className='request-content'>
            <h1>To-Do App!</h1>
        <p>Add New To-Do</p>
                 <input 
        type='text'
        value={this.state.input}
        placeholder='Enter new task'
        onChange={this.handelinput}/>
        <button className='btn' onClick={this.handeladd}>ADD</button></div>  
            </div>
            <div className="response-content">
      <div className="response-title">
        <h3>Lets get some work done!</h3>
        <hr width='400px'/>
      
      </div>
            <div className='respense-list'>
            {this.state.list.map((el,i)=><li>  
              
                <button className='complete' onClick={()=>this.handelcomplete(i)}>{el.isComplete?"undo":"complete"}</button>
                <button className='delete' onClick={()=>this.handeldelete(i)}>delete</button>
                 <p style={{textDecoration:el.isComplete?'line-through':'none'}} >{el.text}</p> 
                 </li>)
                }
            </div>
            </div>
            </div>
        )
    }
}
