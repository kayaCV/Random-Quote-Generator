/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/* 
Create array with 5+ objects. each object with the following properties: "quote", "source";
optional properties: "citation" added at least once, "year" added at least once.
*/

var quotes = [
  {quote: 'I said there are certain flowers that wilt if you put them in a vase',
    source: 'Jorge Amado',
    citation: 'Gabriela, Clove an Cinnamon',
    year: '1958'
  },
  {quote: 'Wax on, wax off.',
    source: 'Mr Miyagi',
    citation: 'The Karate Kid',
    year: '1984'
  },
  {quote: 'Every little thing gonna be alright!',
    source: 'Bob Marley',
    citation: 'Three little birds',
    year: '1977'
  },
  {quote: 'Life would be much easier if I had the source code.',
    source: 'unknown',
    citation: '',
    year: ''
  },
  {quote: 'My code is 100% mistrake free',
    source: 'unknown',
    citation: '',
    year: ''
  }
]


/*
create function getRandomQuote () {
  create var and calculate randomNumber;
  return random object from quotes[randomNumber]
}
*/

function getRandomQuote () {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/*
create function printQuote (){
  call getRandomQuote() and store in var randomQuote {};
  create var html to store randomQuote.properties;
  using HTML template in project instructions
  add randomQuote.quote;
  add randomQuote.source to html;
  if (randomQuote has citation) {
    add randomQuote.citation to html;
  }
  if (randomQuote has year) {
    add randomQuote.year to html;
  }
  target <div id="quote-box">;
  set div.innerHTML to html;
}
*/



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote`        REMOVE
  function. So do not make any changes to the line of code below this 
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.      REMOVE