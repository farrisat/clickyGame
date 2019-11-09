import React, { Component } from "react";
import "./style.css";





  class countCard extends Component {
    state={clicked: false}
    
    render(){
      return (
        <div className="card">
          <div className="img-container" >
            <img alt={this.props.name} src={this.props.image} 
            onClick={() => {

              if (this.props.endGame===false) {
              if (this.state.clicked===true) {
                this.props.stopGame()
              }

              else{
              this.setState({clicked:true})
              // this.props.countCard(this.props.countCard)
              this.props.countCard()
              this.props.doShuffle()
              }
            }
              

            }} className="count"
            />
            </div>
    </div>
  );
    }
  }
 



   

export default countCard;
// {/* <button className="btn btn-primary" onClick={this.handleIncrement}> */}
