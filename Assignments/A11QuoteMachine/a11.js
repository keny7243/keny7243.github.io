const quoteButton = document.querySelector('.button'); //adds reference to the class button
quoteButton.addEventListener('click', getUser); //if clicked, run the getUser function

const endpoint = 'https://randomuser.me/api/' //api that generates a random user and their attributes

const image = document.querySelector('img'); //adds reference to the img element

async function getUser() { //defining getUser function
    let text = await fetch(endpoint) //fetch api fetches endpoint (url)
    let response = await text.text();
    let jsonResponse = JSON.parse(response);

    console.log(jsonResponse);
    console.log(jsonResponse['results'][0]['name']['first']);
    console.log(jsonResponse['results'][0]['login']['username']);
    console.log(jsonResponse['results'][0]['picture']['large']);
    console.log(jsonResponse['results'][0]['dob']['age']);
    console.log(typeof jsonResponse['results'][0]['dob']['age'].toString()); //turning number to string (for textContent)

    displayImage(jsonResponse['results'][0]['picture']['large']);
    displayName(jsonResponse['results'][0]['name']['first'] + ' ' + jsonResponse['results'][0]['name']['last']);
    imageAlt(jsonResponse['results'][0]['name']['first'] + ' ' + jsonResponse['results'][0]['name']['last']);
    displayUsername(jsonResponse['results'][0]['login']['username']);
    displayAge(jsonResponse['results'][0]['dob']['age'].toString());
}

/*https://www.youtube.com/watch?v=pjm1jKPSGck - shows how I created the image*/
function displayImage (x) { //DON'T USE append.child - causes images to accumulate
image.src = x; //changes image source to image url in api 
}

function imageAlt (x) {
    image.alt = `Picture of ` + x; //makes alt say "Picture of name"
    console.log(image.alt);
}

function displayName(x) {
  document.getElementById('js-name-text').textContent = "Name: " + x;
}

function displayUsername(x) {
    document.getElementById('js-username-text').textContent = "Username: " + x;
}

function displayAge(x) {
    document.getElementById('js-age-text').textContent = "Age: " + x;
    //tried x.toString(), string concatenation, `${x}`, String(x), putting it in a different variable
    //turns out it was just that VSCode was acting up
}

getUser(); //running getUser once when page loads
//can also do window.addEventListener('load', getQuote);