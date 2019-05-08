import React,{Component} from 'react';
import styled from 'styled-components';

const Form=styled.form`
display:flex;
width:700px;
div{
    width:20%;
    display:flex;
    flex-direction:column;
    input{
        padding:5px;
        font-size:15px;
    }
}
.name-input{
    width:50%;
}
.btn-div{
    margin-top:21px;
    display:block;
    width:30%;
    button{
        height:30px;
    }
}

`

class ItemForm extends Component {
        constructor(props){
            super(props);
            this.state={
                id:0,
                itemname:'',
                quantity:0,
                amount:0
            }
        }
        handleChange=(e)=>{
            this.setState({
                ...this.state,
                [e.target.name]:e.target.value
                
            });
        }
        handleSubmit=(e)=>{
            e.preventDefault();
            this.props.pushItems(this.state);
            this.setState({
                id:0,
                itemname:'',
                quantity:0,
                amount:0
            })
    }
    render(){
        const {id,itemname,quantity,amount}=this.state;
        return(
            <Form onSubmit={this.handleSubmit}>
             <div className="name-input">
                    <label htmlFor="id">Id</label>
                    <input name="id" placeholder="id" type="text" value={id} onChange={this.handleChange}/>
                </div>
                <div className="name-input">
                    <label htmlFor="Name">Enter Item</label>
                    <input name="itemname" placeholder="Enter ItemName" type="text" value={itemname} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="Quantity">Quantity</label>
                    <input name="quantity" placeholder="Quantity" type="number" value={quantity} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="Amount">Amount</label>
                    <input name="amount" placeholder="Amount" type="number" value={amount} onChange={this.handleChange}/>
                </div>
                <div className="btn-div">
                <button type="submit">Add Item</button>

                </div>
            </Form>
        )
    }
}
export default ItemForm;