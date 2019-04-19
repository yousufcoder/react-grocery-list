import React,{Component} from 'react';
import ItemListIndex from '../components/ItemList';
import styled from 'styled-components';
import ItemForm from '../components/ItemForm';

const GroceryItems=[
    {
        Name:"Milk",
        Quantity:1,
        Amount:20
    },
    {
        Name:"sugar",
        Quantity:1,
        Amount:37
    },
    {
        Name:"TeaPowder",
        Quantity:1,
        Amount:50
    },
    {
        Name:"Almonds",
        Quantity:1,
        Amount:800
    },
    {
        Name:"cashew nut",
        Quantity:1,
        Amount:1100
    }
]

const Container= styled.div`
    display:flex;
    margin-left:auto;
    margin-right:auto;
    flex-direction:column;
    width:750px;
    align-items:center;
    table{
        width:700px;
        td{
            border: 1px solid black;
        }

    }
`

class Home extends Component{
    constructor(){
        super();
        this.state={
            items:GroceryItems
        }
    }
    handleItemPush=(item) => {
        this.setState({
            items:  [
                ...this.state.items,
                item
            ]
        })
    }
    render(){
        const{items}=this.state;
        return(
            <Container>
                <h2>Grocery List</h2>
                <ItemForm pushItems={this.handleItemPush}/>
                <ItemListIndex items={items} />
            </Container>

        )
    }
}
export default Home;

