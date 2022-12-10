

console.log(d3); //d3 object and its available functions
const svg = d3.select('svg');//('div#container');
 /*.append('svg') //selects all svg on page and assigns svg constant to them
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 1000 1000")
  .classed("svg-content", true);*/

// geoNaturalEarth1 - map projection
// geoPath - converts the data path to svg path String
const projection = d3.geoNaturalEarth1(); //instance of the map projection
const pathGenerator = d3.geoPath().projection(projection); //instance of geopath with projection as method with projection variable

const g = svg.append('g');
const colorLegendG = svg.append('g')
    .attr('transform', `translate(30,200)`); //where the colorlegend is 

g.append('path') //appending to g
    .attr('class', 'sphere') //giving the path a class named sphere
    .attr('d', pathGenerator({type: 'Sphere'})); //form of the globe

svg.call(d3.zoom().on('zoom', (e) => { //zoom when zoomed - had to put e so that transform would work
    g.attr('transform', e.transform);
    }));

 

//https://unpkg.com/world-atlas@1.1.4/world/110m.tsv
const countryRows = {};
d3.tsv('../countryData/110-m.tsv')
    .then(data => 
        data.forEach(d => { //for each id from data, 
            countryRows[d.iso_n3] = d; //get the id's whole row of information
        }));

        const colorScale = d3.scaleOrdinal(d3.schemeYlOrBr[7]);//creating color scale
        const colorValue = d => countryRows[d.id].economy;

//use d.name for country name
//use d.iso_n3 for id

//COLORLEGEND
const colorLegend = (selection, props) => {
    const {
      colorScale,
      circleRadius,
      spacing,
      textOffset
    } = props;
  
    const backgroundRect = selection.selectAll('rect')//selects all rectangnles
    .data([null]);
    backgroundRect.enter().append('rect')
    .merge(backgroundRect)
        .attr('x', -circleRadius * 2)//changing position of x so that it moves back the dimaeter of the circles
        .attr('y', -circleRadius * 2)
        .attr('width', 300) //setting width and height
        .attr('height', spacing * 7 + circleRadius * 2)//height is the spacing of the text times the seven options + circle radius doubled
        .attr('fill', 'white');

    const groups = selection.selectAll('g')
      .data(colorScale.domain());
    const groupsEnter = groups
      .enter().append('g')
        .attr('class', 'tick');
    groupsEnter
      .merge(groups)
        .attr('transform', (d, i) =>
          `translate(0, ${i * spacing})`
        );
    groups.exit().remove();
  
    groupsEnter.append('circle') //making the circles and adding color
      .merge(groups.select('circle'))
        .attr('r', circleRadius)
        .attr('fill', colorScale);
  
    groupsEnter.append('text') //making the text
      .merge(groups.select('text'))
        .text(d => d)
        .attr('dy', '0.32em')
        .attr('x', textOffset);
  }
//END OF COLOR LEGEND

//make a json using the same d numbers, adding image files and biodiversity index
//then add to legend or text at the bottom
https://unpkg.com/world-atlas@1.1.4/world/110m.json
d3.json('110m.json') //load data of world polygons using d3.json -> returns promise
    .then (data => { //then (access data and create function that uses data as input)
        console.log(data);
        const countries = topojson.feature(data, data.objects.countries); //converts topojson into geojson?
        console.log(countries); //each feature is a country
        
        colorScale
            .domain(countries.features.map(colorValue))
            .domain(colorScale.domain().sort().reverse());
        console.log(colorScale.domain());

        colorLegendG.call(colorLegend, {
      colorScale,
      circleRadius: 7,
      spacing: 20,
      textOffset: 9
    });

        g.selectAll('path')//selectng all paths in g
            .data(countries.features)//data join for our paths of features
            .enter().append('path')//append a new path for each new element
                .attr('class', 'country')//giving this a class of country
                .attr('d', pathGenerator)//set the d attribute of these paths based on the country
                //d is a string containing a series of path commands that define the path to be drawn ----> https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
                .attr('fill', d=> colorScale(colorValue(d)))//fill is based on income data
                .append('title') //can't just add attribute because this is child of svg
                .text(d => countryRows[d.id].name + ": " + colorValue(d) + ", "+ countryRows[d.id].income_grp + ", " + countryRows[d.id].continent)
    });

/*    const image = document.querySelector('img'); //adds reference to the img element

    const quoteButton = document.querySelector('.button'); //adds reference to the class button
    quoteButton.addEventListener('click', getUser); //if clicked, run the getUser function

    async function getUser() { //defining getUser function    
        console.log(jsonResponse);
    
        displayImage(jsonResponse['results'][0]['picture']['large']);
        displayName(jsonResponse['results'][0]['name']['first'] + ' ' + jsonResponse['results'][0]['name']['last']);
        imageAlt(jsonResponse['results'][0]['name']['first'] + ' ' + jsonResponse['results'][0]['name']['last']);
        displayUsername(jsonResponse['results'][0]['login']['username']);
        displayAge(jsonResponse['results'][0]['dob']['age'].toString());
    }


   /* Create <img> element in the HTML code.
Add style to <img> element and set display properties to none.
Create a JavaScript “show()” function that can access the image and change the display property to block.
Add button in HTML code which calls “show()” function when user clicks on it.
//go to d3 to see how to style css of .text*/