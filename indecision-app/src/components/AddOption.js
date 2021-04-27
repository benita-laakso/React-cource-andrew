import React from 'react';


export default class AddOption extends React.Component{
    state={
        error:undefined
    };
  
    handleAddOption =(e) =>{
        e.preventDefault(); //handleAddoption method built into the Component,fiers when form is submited
        console.log('tesingNow')
        const option= e.target.elements.option.value.trim();
        //e.target.elements.option.value = " ";
        const error = this.props.handleAddOption(option);//handeleAdoption method pased down from the parent
        this.setState(()=>({error})); 
        e.target.elements.option.value = " ";//I added the code to clear the input
     };
   
     render(){
       
             return(
                 <div>
                 {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                 <form className="add-option" onSubmit = {this.handleAddOption}>
                 <input className="add-option__input" type ="text" name = "option"></input>
                 <button className="button">Add option</button>
                 </form> 
                 </div>
             );
         }
 }

