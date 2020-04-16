import React, { useState, Component} from 'react';
import './index.css';
import Dropdown from 'react-bootstrap/Dropdown'

class DualNBack extends Component {
  constructor(props) {
    super(props);
    this.rounds = 20;
    this.order = [[], []]
    this.n = 2;
    this.audio = false;
    this.position = false;
    this.score = [0, 0];
    this.state = {
      start : true
    };
  }
  setN(n) {
    this.n = n;
  }
  setPosition(pos){
    this.position = pos;
  }

  setAudio(newAudio){
    this.audio = newAudio;
  }

  game(){
    for(var i = 0; i < 9; i++){
      document.getElementById(i).style.backgroundColor = "white";
    }
    if(this.rounds > 0){
      setTimeout(() => {
        var pos = Math.ceil(Math.random() * 9) - 1;
        document.getElementById(pos).style.backgroundColor = "rgb(255, 195, 11)";
        this.order[0].unshift(pos);
        this.rounds -= 1;
        setTimeout(() => this.checkPos(), 950);
        setTimeout(() => this.game(), 1000);}, 1000);
    }
    else{
      this.order[0] = [];
      this.rounds = 20;
      this.overStart = false;
      this.setState({start : true});
    }
  }

  checkPos(){
    if(this.n > this.order[0].length && this.position == true){
      this.score[1] += 1;
    }
    else if(this.order[0].length >= this.n){
      if(this.order[0][this.n] == this.order[0][0] && this.position == true){
        this.score[0] += 1;
      }
      else if(this.order[0][this.n] == this.order[0][0] && this.position == false){
        this.score[1] += 1;
      }
      else if(this.order[0][this.n] != this.order[0][0] && this.position == true){
        this.score[1] += 1;
      }
    }
    this.setPosition(false);
  }

  render() {
    return (
      <div className = "background">
        <div className = "info-container">
          <div className = "info-header">Rules of N-back</div>
          <div className = "info-text-explaination">N-back is a minigame where the goal is to keep track of the N latest elements. </div>
          <div className = "info-text">1) Choose your N from the dropdown above the game field</div>
          <div className = "info-text">2) Click start on the game field</div>
          <div className = "info-text">3) Whenever the position of the yellow marker is the same as it was N times ago, click the position button below the game field.</div> 
          
        </div>

        <div className = "dropdown-container">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-class" variant="warning">
            Choose your N
            </Dropdown.Toggle>
            <Dropdown.Menu className ="dropdown-menu">
              <Dropdown.Item onSelect={() => {this.setN(2); document.getElementById("dropdown-class").innerHTML = "N = " + this.n}}>2</Dropdown.Item>
              <Dropdown.Item onSelect={() => {this.setN(3); document.getElementById("dropdown-class").innerHTML = "N = " + this.n}}>3</Dropdown.Item>
              <Dropdown.Item onSelect={() => {this.setN(4); document.getElementById("dropdown-class").innerHTML = "N = " + this.n}}>4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className = "wrapper">
          <div>
            {this.state.start ? [
              <div onClick = {() =>
                {
                  this.score[0] = 0;
                  this.score[1] = 0;
                  this.setState({start : false});
                  this.game();
                }}>
              <spam className="start-btn-text">Click to start!</spam>
              <div className = "overlay"></div>
            </div>
            ] : null}
          </div>
          <div className = "game-container">
            <div id = "0" className = "grid-item"> </div>
            <div id = "1" className = "grid-item"> </div>
            <div id = "2" className = "grid-item"> </div>
            <div id = "3" className = "grid-item"> </div>
            <div id = "4" className = "grid-item"> </div>
            <div id = "5" className = "grid-item"> </div>
            <div id = "6" className = "grid-item"> </div>
            <div id = "7" className = "grid-item"> </div>
            <div id = "8" className = "grid-item"> </div>
          </div>
        </div>

        <div className = "dual-button-class" 
        onClick = {() => {this.setPosition(true)}}>
          Position
        </div>
        <div className = "score-holder">
          <div className = "score-title"> Score </div>
          <div className = "score-correct"> Correct: {this.score[0]} : {Math.round(this.score[0]/(this.score[0] + this.score[1]) * 100)}% </div>
          <div className = "score-incorrect"> Incorrect: {this.score[1]} : {Math.round((this.score[1]/(this.score[0] + this.score[1])) * 100)}% </div>
        </div>
      </div>
    );
  }
}
export default DualNBack;
