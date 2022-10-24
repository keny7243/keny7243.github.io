const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


/* Declaring the alternative text for each image file 
for whatever reason, `` doesn't work for objects - I was getting errors till i switched to ''*/

const altText = {
'pic1.jpg' : 'Closeup of a grass', 
'pic2.jpg' : 'Back of a painted building', 
'pic3.jpg' : 'Cut-down tree', 
'pic4.jpg' : 'Closeup of a rock', 
'pic5.jpg' : 'River'};

/* Looping through images 
setAttribute - sets an attribute or updates existing ones
e - event object
"image" needs to be used in code because its the const that we are looping*/

for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', altText[image]);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', e => {
displayedImage.src = e.target.src;
displayedImage.alt = e.target.altText;});
};


/* Wiring up the Darken/Lighten button 
getAttribute looks at any attributes the element has
textContent changes the actual text on the button
need to create a variable that looks at the class of the button specifically - can't just have button itself*/
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark'){
    btn.setAttribute("class", 'light');
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = 'rgba(142,53,41,0.5)';
  } else {
    btn.setAttribute("class", 'dark');
    btn.textContent = "Darken";
    overlay.style.backgroundColor = 'rgb(0,0,0,0)';
  }
});