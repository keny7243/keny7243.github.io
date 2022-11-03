const quoteButton = document.querySelector('.new-quote'); //adds reference to new quote button thru its class
quoteButton.addEventListener('click', getQuote); //if clicked, run the getQuote function

const endpoint = 'https://randomuser.me/api/' //api that generates a quote and its attributes

async function getQuote() { //defining getQuote function
   // console.log('test click worked'); //show text in console 
    let text = await fetch(endpoint) //fetch api fetches endpoint (url)
    let response = await text.text();
    let jsonResponse = JSON.parse(response);
    console.log(jsonResponse);
    console.log(jsonResponse['results'][0]['name']['first']);
    console.log(jsonResponse['results'][0]['login']['username']);
    console.log(jsonResponse['results'][0]['picture']['large']);
    console.log(jsonResponse['results'][0]['dob']['age']);
    const image = document.querySelector('img');
    image.src = jsonResponse['results'][0]['picture']['large'];
    image.alt = `Picture of ${jsonResponse['results'][0]['login']['username']}`;
    //document.getElementById('js-picture-img').appendChild(img);
    displayQuote(jsonResponse['results'][0]['name']['first'] + ' ' + jsonResponse['results'][0]['name']['last']);
    displayUsername(jsonResponse['results'][0]['login']['username']);
    console.log(typeof jsonResponse['results'][0]['dob']['age'].toString());
    displayAge(jsonResponse['results'][0]['dob']['age'].toString());
}

function displayQuote(x) {
  document.getElementById('js-quote-text').textContent = "Name: " + x;
}

function displayUsername(x) {
    document.getElementById('js-username-text').textContent = "Username: " + x;
}

function displayAge(x) {
    console.log(x);
    document.getElementById('js-age-text').textContent = "Age: " + x;
    //tried x.toString(), string concatenation, `${x}`, String(x), putting it in a different variable
}

getQuote();
//can also do window.addEventListener('load', getQuote);