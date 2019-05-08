import React from 'react';

const ItemListIndex =({items})=>{
    console.log(items);
    const Total= items.reduce((initialValue,item)=>{
        return initialValue+(item.quantity*item.amount);
    },0);
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                { items.map(({id,itemname,quantity,amount},index) => (
                     <tr key={`items-${index}`}>
                     <td>{id}</td>
                     <td>{itemname}</td>
                     <td>{quantity}</td>
                     <td>{amount}</td>
                 </tr>
                ))}
                <tr>
                    <td colSpan="3">Total</td>
                    <td>{Total}</td>
                </tr>
                </tbody>
                
            </table>

        </div>
    )
}

export default ItemListIndex;