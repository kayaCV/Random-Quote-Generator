/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//Quotes and related information
var quotes = [
  {quote: 'I said there are certain flowers that wilt if you put them in a vase...',
   source: 'Jorge Amado',
   citation: 'Gabriela, Clove and Cinnamon',
   year: '1962',
   category: 'book'
  },
  {quote: 'Wax on, wax off.',
   source: 'Mr Miyagi',
   citation: 'The Karate Kid',
   year: '1984',
   category: 'movie'
  },
  {quote: 'Every little thing gonna be alright!',
   source: 'Bob Marley',
   citation: 'Three little birds',
   year: '1977',
   category: 'music'
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
  }
]

// Background colors
var backgrounds = ['red', 'blue', 'purple', 'orange', 'olive', 'teal', 'green', 'navy'];

// Timer to change quote on screen
var timer = setInterval(printQuote, 5000); 

// Randomly pick and change background color
function changeBackground() {
  var number =  Math.floor(Math.random() * backgrounds.length);
  document.body.style.background = backgrounds[number];
}

// Return a random quote and related information from quotes[]
function getRandomQuote () {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/*
Print a quote to screen
Restart timer
Change background color
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
    html += '<span class="category"; align="right">' + ' ' + randomQuote.category + '</p>';
  }
  html += '</span>';
  var div = document.getElementById('quote-box').innerHTML = html;
  clearInterval(timer);
  timer = setInterval(printQuote, 5000);
  changeBackground();
}
printQuote ();
/***
  When button is clicked, event listener 
  below will call printQuote
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

