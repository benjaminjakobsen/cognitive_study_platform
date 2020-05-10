import React, {useState} from 'react';
import './index.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Button, TextField} from "@material-ui/core";

function Statistics(props){
  const history = useHistory();
  var [gameList, updateGameList] = useState([{incorrect : 0, correct : 0}, {incorrect : 0, correct : 0}, {incorrect : 0, correct : 0}, {incorrect : 0, correct : 0}]);
  var token = localStorage.getItem('token')
  const userConfig = {
    headers: {
      'Content-type': 'application/json'
    }
  }
  if(token) {
    userConfig.headers['token'] = token;
  }
  axios.post('/api/users/info', userConfig.body, {headers : userConfig.headers})
    .then((res) => {
      updateGameList(res.data.nback);
    })
  
  
  return (
    <>
      <div className = "statistics-container">
        <p className = "statistics-header">Statistics from your latest 4 N-Back games</p>
        <div id = "game1" className = "statistics-game-container">
          <p className = "statistics-game-text">Game 1</p>
          <p className = "statistics-game-incorrect">Incorrect: {gameList[gameList.length-1]['incorrect']}</p>
          <p className = "statistics-game-correct">Correct: {gameList[gameList.length-1]['correct']}</p>
        </div>
        <div id = "game2" className = "statistics-game-container">
          <p className = "statistics-game-text">Game 2</p>
          <p className = "statistics-game-incorrect">Incorrect: {gameList[gameList.length-2]['incorrect']}</p>
          <p className = "statistics-game-correct">Correct: {gameList[gameList.length-2]['correct']}</p>
        </div>
        <div id = "game3" className = "statistics-game-container">
          <p className = "statistics-game-text">Game 3</p>
          <p className = "statistics-game-incorrect">Incorrect: {gameList[gameList.length-3]['incorrect']}</p>
          <p className = "statistics-game-correct">Correct: {gameList[gameList.length-3]['correct']}</p>
        </div>
        <div id = "game4" className = "statistics-game-container">
          <p className = "statistics-game-text">Game 4</p>
          <p className = "statistics-game-incorrect">Incorrect: {gameList[gameList.length-4]['incorrect']}</p>
          <p className = "statistics-game-correct">Correct: {gameList[gameList.length-4]['correct']}</p>
        </div>

        <Button className = "go-to-nback-button" variant = "contained" onClick={() => {
          history.push('/interactive/memory/dual_n_back')
        }}>Play more N-back</Button>

      </div>
    </>
  );
}

export default Statistics;