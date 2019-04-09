import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import ClickyCard from "./components/ClickyCard";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  
  state = {
    score: 0,
    topScore: 0,
    homeAddress: window.location.href,
    statusText: "Click an image to begin!",
    statusClass: "",
    characters: characters,
    cardClass: "click-item"
  }

  shuffleCards = (characters) => {
    const shuffled = [];
    const chosen = [];
    while (shuffled.length !== characters.length) {
      let randNum = Math.floor(Math.random() * characters.length);
      if (chosen.indexOf(randNum) === -1) {
        shuffled.push(characters[randNum]);
        chosen.push(randNum);
      }
    };
    
    this.setState({ characters: shuffled});
  };

  cardClicked = id => {
    //Determine if character has already been clicked
    this.state.characters.forEach(character => {
      if (character.id === id && !character.clicked) {
        character.clicked = true;
        this.setState({ cardClass: "click-item", statusClass: "correct", score: this.state.score + 1 });
        (this.state.score === this.state.characters.length -1) ? this.setState({ statusText: "You won!", topScore: this.state.characters.length, score: 0 }) : this.setState({ statusText: "Great! Choose another!" });
      } else if (character.id === id && character.clicked) {
        if (this.state.score > this.state.topScore) this.setState({ topScore: this.state.score });
        this.setState({ cardClass: "click-item shake", statusText: "Oops! Already chosen!", statusClass: "incorrect", score: 0 });
        this.state.characters.forEach(character => character.clicked = false);
      }
    })
    
    this.shuffleCards(this.state.characters);
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          homeAddress={this.state.homeAddress}
          statusText={this.state.statusText}
          statusClass={this.state.statusClass}
        ></NavBar>
        <Jumbotron />
        <div className="container">
          {this.state.characters.map(character => (
            <ClickyCard
              cardClicked={this.cardClicked}
              key={character.id}
              id={character.id}
              cardClass={this.state.cardClass}
              image={character.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
