import React from 'react';
import Todo from './Todo';
export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            items : [],
            currentItem : {
                text : '',
                key : ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text!==""){
        const items = [...this.state.items, newItem];
        
        this.setState({
           items : items,
           currentItem : {
               text : '',
               key : ''
           }
        })
        
    }
}
    deleteItem(key){
        const newItems = this.state.items.filter(item => item.key !== key);
        this.setState({
            items : newItems
        })
    }
    handleInput(e){
        this.setState({
            currentItem :{
                text : e.target.value,
                key : Date.now()
            }
        })
    }
    
    render(){
        return (
            <div className="container">
            <div className="App">
                <h1 ><i className="fa fa-fire" style={{color:"orange",marginRight:20}}>
                </i>TODO APP</h1><br/><br/>
                <form onSubmit={this.addItem}>
                <input style={{marginRight:20}} type="text" placeholder="add here..." 
                value={this.state.currentItem.text} onChange = {this.handleInput}/>
                <button type="submit" className="btn btn-warning">ADD</button>
                </form><br/>
                <Todo items={this.state.items} deleteItem={this.deleteItem}/>

            </div>
            </div>
        )
    }
}