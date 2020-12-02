
import './App.css'
import React from 'react';
class Shop extends React.Component {
    constructor(props){
        super(props)
        this.state={
           item:{},
           images:{}
        }
    }

  componentDidMount(){
      this.fetchItem();
      console.log(this.props.match)
  }
 fetchItem = async ()=>{
 const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`);
 const item= await data.json();
 
        // console.log(item)
        this.setState({
            item:item.data.item,
            images:item.data.item.images
        })
        console.log('from the state',this.state.item,this.state.images)
     
    }

    render() {
       

  return (
    <div>
   <h1>{this.state.item.name}</h1>
   <img src={this.state.images.icon} alt="hbj"/>

</div>
  );
}
 }

export default Shop;


