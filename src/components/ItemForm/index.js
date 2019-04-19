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
    width:10%;
    button{
        height:30px;
    }
}

`

class ItemForm extends Component {
        constructor(props){
            super(props);
            this.state={
                Name:'',
                Quantity:0,
                Amount:0
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
        }
    render(){
        const {Name,Quantity,Amount}=this.state;
        return(
            <Form onSubmit={this.handleSubmit}>
                <div className="name-input">
                    <label htmlFor="Name">Enter Item</label>
                    <input name="Name" placeholder="Enter ItemName" type="text" value={Name} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="Quantity">Quantity</label>
                    <input name="Quantity" placeholder="Quantity" type="number" value={Quantity} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="Amount">Amount</label>
                    <input name="Amount" placeholder="Amount" type="number" value={Amount} onChange={this.handleChange}/>
                </div>
                <div className="btn-div">
                <button type="submit">Add Item</button>

                </div>
            </Form>
        )
    }
}
export default ItemForm;