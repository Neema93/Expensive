import React from "react";
 

export default class ExpenseForm extends React.Component{

    state = {
        description: '',
        amount:'',
        createdAt:'',
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
        const createdAt = e.target.value;
        this.setState(() => ({createdAt}))

    }
    onSubmit= (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount || !this.state.createdAt){
            this.setState(() =>({error:'please provide descrpition and amount and date'}))
        } else {
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount, 10)* 100,
                createdAt: this.state.createdAt

            })
            console.log("submitted!")
        }
    }
    render(){
        return(
            <div>
              {this.state.error &&  <p>{this.state.error}</p>}
              <form onSubmit={this.onSubmit}>
                <input type='text' placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/><br/><br/>
                <input type='number' placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/><br/><br/>
                <input type="date" value={this.state.createdAt} onChange={this.onDateChange}></input><br/><br/>
                
                <button>Add Expense</button>
               
                </form>
            </div> 
        )
    }
}