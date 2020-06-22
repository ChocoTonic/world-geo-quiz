import React, { useEffect } from 'react';
import './App.css';
import './components/map/svgAfrica.component';
import SvgAfrica from './components/map/svgAfrica.component';

function App() {
  // [].slice.call(document.querySelectorAll('path'));
  let countries = [];
  let lastIndex;

  useEffect(() => {
    queyHTMLElements();
  });
  const queyHTMLElements = () => {
    countries = [...document.querySelectorAll('path')];
  };

  const startGame = () => {
    //shuffle highlight countries
    const timerID = setInterval(shuffleSelect, 50);

    //stop shuffle => select country => start quiz
    setTimeout(function () {
      clearInterval(timerID);
      startQuiz();
    }, 1000);
  }; //end startGame

  const shuffleSelect = function () {
    if (lastIndex !== undefined) countries[lastIndex].style.fill = '#f2f2f2';

    const index = Math.floor(Math.random() * countries.length);

    //highlight country
    countries[index].style.fill = 'red';
    lastIndex = index;
  }; //end shuffleSelect

  const startQuiz = () => {
    console.log(lastIndex);
  };

  return (
    <div className='App'>
      <div className='container'>
        <SvgAfrica />
        <button
          id='play-btn'
          type='button'
          className='btn-primary'
          onClick={startGame}
        >
          PLAY
        </button>
      </div>
    </div>
  );
}

export default App;
