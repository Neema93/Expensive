import React from "react";
 

export default class ExpenseForm extends React.Component{

    state = {
        description: '',
        amount:'',
        createAt:'',
        error:''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
    }
    onDateChange = (e) => {
        const createAt = e.target.value;
        this.setState(() => ({createAt}))

    }
    onSubmit= (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount || !this.state.createAt){
            this.setState(() =>({error:'please provide descrpition and amount and date'}))
        } else {
            this.setState(()=>({error:''}))
            console.log("submitted")
        }
    }
    render(){
        return(
            <div>
                <p>{this.state.error}</p>
              <form onSubmit={this.onSubmit}>
                <input type='text' placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/><br/><br/>
                <input type='number' placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/><br/><br/>
                <input type="date" value={this.state.createAt} onChange={this.onDateChange}></input><br/><br/>
                
                <button>Add Expense</button>
               
                </form>
            </div> 
        )
    }
}