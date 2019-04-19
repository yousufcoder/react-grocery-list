import React from 'react';

const ItemListIndex =({items})=>{
    const Total= items.reduce((initialValue,item)=>{
        return initialValue+(item.Quantity*item.Amount);
    },0);
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                { items.map(({Name,Quantity,Amount},index) => (
                     <tr key={`items-${index}`}>
                     <td>{Name}</td>
                     <td>{Quantity}</td>
                     <td>{Amount}</td>
                 </tr>
                ))}
                <tr>
                    <td colSpan="2">Total</td>
                    <td>{Total}</td>
                </tr>
                </tbody>
                
            </table>

        </div>
    )
}

export default ItemListIndex;