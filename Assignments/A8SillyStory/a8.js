/* 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/*2. RAW TEXT STRINGS*/

const storyText = 'The desert winds blew wildly, bringing sand into the crevices of :insertx:\'s face. The sun had scorched the earth to 115 fahrenheit. They felt a glimmer of hope when the sand took shape from a distance. \":inserty:.\" As they approached, the sand began to :insertz:. :insertx: watched as Bob emerged from the chaos, a figure weighing 2300 pounds.';

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['The soup kitchen', 'Disneyland', 'The White House'];
const insertZ = ['spontaneously combust', 'melt into a puddle', 'turn into crawling slugs'];

/*3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION*/

randomize.addEventListener('click', result);

function result() {
    
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(2300/14) + ' stone';
    const temperature = Math.round((115-32)*(5/9)) + ' centigrade';
    newStory = newStory.replaceAll('115 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}