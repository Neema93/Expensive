import React from "react";
import { connect } from "react-redux";
 class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            description: props.expense ?  props.expense.description:'',
            amount: props.expense ?  (props.expense.amount/100 ).toString(): '',
            error:''
        }
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
    onSubmit= (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(() =>({error:'please provide descrpition and amount'}))
        } else {
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount, 10)* 100,
                user_id: this.props.user_id   

            })
        }
    }
    render(){
        return(
            <div >
              {this.state.error &&  <p>{this.state.error}</p>}
              <form className="form" onSubmit={this.onSubmit}>
                <input className='input' type='text' placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                <input className='input' type='number' placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
                <button className='form_button'>Add Expense</button>
                </form>
            </div> 
        )
    }
}
const mapStateToProps = (state) => ({
    user_id: state.auth.user.user_id
});
export default connect(mapStateToProps)(ExpenseForm);
