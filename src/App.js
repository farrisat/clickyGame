import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import friends from "./friends.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count:0,
    endGame: false
  };

  countCard= () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends:friends });
    this.setState({count:this.state.count+1})
  };


  getCount = ()=>{
    return this.state.count
  }

  shuffleCards = () =>{
    function shuffle(arr) {
      var i,
          j,
          temp;
      for (i = arr.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
      return arr;    
  };
  this.setState({friends:shuffle(this.state.friends)})
  }

  stopGame = ()=>{
    this.setState({endGame:true})
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar getCount = {this.getCount} />
        
   
        <Header/>
      
        {this.state.friends.map(friend => (
          <FriendCard
            countCard={this.countCard}
            id={friend.id}
            image={friend.image}
            doShuffle={this.shuffleCards}
            endGame={this.state.endGame}
            stopGame={this.stopGame}
            key={friend.id}

          />
        ))}
        
      </Wrapper>
    );
  }
}



export default App;
