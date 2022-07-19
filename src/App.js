import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
      .then(response => response.json())
      .then(data => setJoke(data.joke));

    console.log(joke);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="App">
      <div className="App-Text">
        <div className='Text-Wrapper'>
          {joke ? <span>{joke}</span> : <span>Loading...</span>}
        </div>
      </div>
    </div>
  );
}

export default App;
