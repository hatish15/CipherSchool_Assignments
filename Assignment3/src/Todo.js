import React from 'react';

function Todo(props){
    const items = props.items;
    const listItems = items.map((item)=>{
        return (
            <div className="responsive">
            <div className="list" key={item.key}>
                <p>{item.text} <span><i className="fa fa-trash" onClick = {()=>props.deleteItem(item.key)}></i></span></p>
                
            </div>
            </div>
        )
    })
    return (
        <div >
            {listItems}
            </div>
    )
}
export default Todo;