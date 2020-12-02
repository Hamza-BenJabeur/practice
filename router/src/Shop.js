
import './App.css'
import React from 'react';
import {Link} from 'react-router-dom'
class Shop extends React.Component {
    constructor(){
        super()
        this.state={
           items:[] 
        }
    }

  componentDidMount(){
      this.fetchItem();
  }
 fetchItem = async ()=>{
        const data= await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
        const items= await data.json();
        const itemse=items.data;
        console.log(itemse)
        this.setState({
            items:itemse
        })
        console.log('from the state',this.state.items)
     
    }

    render() {
       

  return (
    <div>
        {this.state.items.map(item=>
     
            <h1 key={item.itemId}>
                   <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h1>
          
        )}

</div>
  );
}
 }

export default Shop;
