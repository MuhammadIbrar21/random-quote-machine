import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((res) => { return res.json() })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author
        })
      })
  }

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{quoteInfo.text}</div>
        <div id="author">{quoteInfo.author}</div>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text' + quoteInfo.text} target="_top" >Tweet Quote</a>
      </div>
    </div>
  );
}

export default App;
