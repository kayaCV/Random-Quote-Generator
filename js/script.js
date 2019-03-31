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
  {quote: 'I said there are certain flowers that wilt if you put them in a vase...',
    source: 'Jorge Amado',
    citation: 'Gabriela, Clove and Cinnamon',
    year: '1962',
    category: 'Book'
  },
  {quote: 'Wax on, wax off.',
    source: 'Mr Miyagi',
    citation: 'The Karate Kid',
    year: '1984',
    category: 'Movie'
  },
  {quote: 'Every little thing gonna be alright!',
    source: 'Bob Marley',
    citation: 'Three little birds',
    year: '1977',
    category: 'Music'
  },
  {quote: 'Life would be much easier if I had the source code.',
    source: 'Unknown'
  },
  {quote: 'My code is 100% mistrake free.',
    source: 'Unknown'
  },
  {quote: 'Push through the pain. Giving up hurts more.',
    source: 'Vegeta',
    citation: 'Drangon Ball Z',
    category: 'Anime'
  }
]

// array of background colors and image
var backgrounds = ['red', 'blue', 'purple', "url('testPic.png')", 'orange'];  ///   CHANGE PIC!!

// timer; if button not clicked, timer will run continuously
var timer = setInterval(printQuote, 5000); 

// function to change background
function changeBackground() {
  var number =  Math.floor(Math.random() * backgrounds.length);
  document.body.style.background = backgrounds[number];
}

/*
getRandomQuote will calculate randomNumber to be used as index in quotes array. 
This will return a random object (quote and related info)
*/

function getRandomQuote () {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/*
printQuote will getRandomQuote,
build one paragraph with quote, second and third paragraph with remaining info,
print to screen
restart timer
change background color
*/

function printQuote () {
  var randomQuote = getRandomQuote();
  var html = '';
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  if (randomQuote.category) {
    html += '<p class="category"; align="right"><b><i>' + '-' + randomQuote.category + '-' + '</i></b></p>';
  }
  html += '</p>';
  var div = document.getElementById('quote-box').innerHTML = html;
  clearInterval(timer);
  timer = setInterval(printQuote, 5000);
  changeBackground();
}

/***
  When button is clicked, event listener 
  below will call printQuote
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

