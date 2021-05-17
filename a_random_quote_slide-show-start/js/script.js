/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// var quotes={
//   quote:['quote 1','quote 2','quote 3'],
//   source:[],
//   citation:[],
//   year:[]
// };

var randomQuote;
var html="";
var quotes=[
  {
    quote: "Fearlessness is like a muscle. I know from my own life that the more I exercise it the more natural it becomes to not let my fears run me.",
    source: "Arianna Huffington",
    citation: "tweet",
    year:"2019"
  },
  {
    quote: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.",
    source: "Helen Keller",
    citation: "story of her life",
    year:"1903"
  },
  {
    quote: "I’ve learned that making a living is not the same thing as making a life.",
    source: "Maya Angelou",
    citation: "Letter to My Daughter",
    year:"2008"
  },
  {
    quote: "Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes",
    source: "Marie Von Ebner-Eschenbach",
    citation: "the clock maker",
    year:"1880"
  },
  {
    quote: "Nothing is impossible, the word itself says “I’m possible!",
    source: "Audrey Hepburn",
    citation: "quote",
    year:"1954"
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote()
{
  //create a random number between 0 and the length of quote array
  let randomNumber=Math.floor(Math.random()*(quotes.length));
  //store the random quote object and return it
  randomQuote=quotes[randomNumber];
  return randomQuote;

}


/***
 * `printQuote` function
***/
function printQuote()
{
  //store the random quote object by calling getRandomQuote()
  let randomQuote=getRandomQuote();
  //Create HTML code based on quote objects:
  html="<p class='quote'>" +randomQuote.quote + "</p>";
  if(randomQuote.source)
  {
    html+="<p class='source'>"+randomQuote.source;
  }
  if(randomQuote.citation)
  {
    html+="<span class='citation'>"+randomQuote.citation;
  }
  if(randomQuote.year)
  {
    html+="</span><span class='year'>"+randomQuote.year+"</span></p>";
  }
  
  //get the div element
  var div=document.getElementById("quote-box");
  //set the new html content to div 
  div.innerHTML=html;

}
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);