import React,{Component} from 'react';
import axios from 'axios';
import ItemListIndex from '../components/ItemList';
import styled from 'styled-components';
import ItemForm from '../components/ItemForm';
import Loading from '../components/Loading';





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
            items:[],
            loaded:false
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
        const{items,loaded}=this.state;
        return(
            <Container>
                <h2>Grocery List</h2>
                {!loaded?<Loading/>:
                (
                    <div>
                        <ItemForm pushItems={this.handleItemPush}/>
                        <ItemListIndex items={items} />
                    </div>
                )

                }
               
            </Container>

        )
    }
    componentDidMount(){
        axios.get('http://localhost:3003/api/item-list').then(({data})=>{
          
            this.setState({
                items: data,
                loaded:true
            });
            
        })
        .catch(function(error){
            console.log(error);
        });
        
    }
}
export default Home;

