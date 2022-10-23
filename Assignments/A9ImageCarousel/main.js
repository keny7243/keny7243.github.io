const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


/* Declaring the alternative text for each image file */

const altText = {
'pic1.jpg' : 'Closeup of a human eye', 
'pic2.jpg' : 'description2', 
'pic3.jpg' : 'description3', 
'pic4.jpg' : 'description4', 
'pic5.jpg' : 'description5'}

/* Looping through images */

for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${images}`);
newImage.setAttribute('alt', altText[images]);
thumbBar.appendChild(newImage);

newImage.addEventListener('click', e => {
displayedImage.src = e.target.src;
displayedImage.alt = e.target.altText;});
}


/* Wiring up the Darken/Lighten button */
/*btn.addEventListener('click', getAttribute);

If the class name is "dark", changes the <button> class to "light" (using setAttribute()), its text content to "Lighten", and the background-color of the overlay <div> to "rgba(0,0,0,0.5)".
If the class name is not "dark", changes the <button> class to "dark", its text content back to "Darken", and the background-color of the overlay <div> to "rgba(0,0,0,0)".
The following lines provide a basis for achieving the changes stipulated in points 2 and 3 above.

btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
getAttribute()*/