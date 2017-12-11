import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: 1,
      storyInput: [],
      wordType: ["noun","adjective"]
    };
    this.storyInput = this.storyInput.bind(this);
  };
  
  storyInput(e){
    let input = e.target.value.split(' ')
    this.setState({
      storyInput: input
    });
  };

  render() {
    let wordTypes = this.state.wordType;
    
    let wordTypeOptions = function(originalWord){
      let selector = document.getElementById("wordTypeOptions")
      for (let x=0; x<=wordTypes.length; x++){
        console.log(selector)
      }
    };
        
    let renderStoryAsDropDowns = this.state.storyInput.map(function(word, i){
      return <select key={`wordOption_${i}`} id="wordTypeOptions" >
        {wordTypeOptions(word)}
      </select>
    });
    
    return (
      <div className="App">
        <textarea placeholder="Paste your story here" onChange={this.storyInput}></textarea>
        <div>
          <h1>spit out the story here:</h1>
          <p>{this.state.storyInput}</p>
          <p>{renderStoryAsDropDowns}</p>
        </div>
      </div>
    );
  }
}

export default App;
