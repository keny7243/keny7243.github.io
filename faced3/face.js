console.log(d3); //d3 object and its available functions
const svg = d3.select('svg'); //selects all svg on page and assigns svg constant to them
//svg.style('background-color', 'red'); ------(css) styles svg with key (bg color) and value (red)
const svgHeight = parseFloat(svg.attr('height'));//getting svg attribute of height and parsing the string to a number
const svgWidth = +svg.attr('width');//+ is abbreviated version
const circle = svg.append('circle')//appends circle to the svg; chaining attributes of circle (can also just write it again as circle first)
    .attr ('r', svgHeight/2)//attribute (radius), value (can also do 500/2) 
    .attr ('cx', svgWidth/2)//x axis coordinate of center point, entire width of svg/2
    .attr ('cy', svgHeight/2)//same but for y
    .attr ('fill', 'yellow')//making circle yellow
    .attr ('stroke', 'black');//making border black

const leftEye = svg.append('circle')//appends circle to the svg; chaining attributes of leftEye (can also just write it again as leftEye first)
    .attr ('r', 30)
    .attr ('cx', svgWidth/2 - 100)//x axis coordinate of center point, middle minus 100
    .attr ('cy', svgHeight/2 - 30)//same but for y
    .attr ('fill', 'black');

const rightEye = svg.append('circle')
    .attr ('r', 30)
    .attr ('cx', svgWidth/2 + 100)//add instead
    .attr ('cy', svgHeight/2 - 30)
    .attr ('fill', 'black');