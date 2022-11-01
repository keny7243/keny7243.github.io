const quoteButton = document.querySelector('.new-quote'); //adds reference to new quote button thru its class
quoteButton.addEventListener('click', getQuote); //if clicked, run the getQuote function

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random' //api that generates a quote and its attributes

async function getQuote() { //defining getQuote function
   // console.log('test click worked'); //show text in console 
    let text = await fetch(endpoint) //fetch api fetches endpoint (url)
    let response = await text.text();
    let jsonResponse = JSON.parse(response);
    //console.log(jsonResponse);
    console.log(jsonResponse['message']);
    //.then(text => text.text());
    //.then(y => myDisplay(y));
    //console.log('text'['message']);
    displayQuote(jsonResponse['message']);
}

function displayQuote(x) {
   // const quoteBox = document.querySelector('#js-quote-text');//reference through id
   // console.log('display quote working');
   //const textMessage = document.createTextNode(x);
  // quoteBox.appendChild(textMessage);

  document.getElementById('js-quote-text').textContent = x;
}

getQuote();
//can also do window.addEventListener('load', getQuote);