console.log(d3); //d3 object and its available functions
let svg = d3.select('svg')//('div#container');
    .append('svg') //selects all svg on page and assigns svg constant to them
    .classed("svg-content", true);

function myFunction(w) {
    if (w.matches) { // If media query matches
        svg
          .attr("preserveAspectRatio", "xMinYMin meet")
          .attr("viewBox", "0 0 850 850");
    } else {
        svg
          .attr("preserveAspectRatio", "xMinYMin meet")
          .attr("viewBox", "0 0 660 660");
    }
  }
 
var w = window.matchMedia("(max-width: 749px)")
  myFunction(w) // Call listener function at run time
  w.addListener(myFunction) // Attach listener function on state changes

// geoNaturalEarth1 - map projection
// geoPath - converts the data path to svg path String
const projection = d3.geoNaturalEarth1(); //instance of the map projection
const pathGenerator = d3.geoPath().projection(projection); //instance of geopath with projection as method with projection variable

const g = svg.append('g');
const colorLegendG = svg.append('g')
    .attr('transform', `translate(20,320)`); //where the colorlegend is 

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

        //https://www.npmjs.com/package/d3-scale-chromatic - different color patterns
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
        .attr('rx', circleRadius*2) //rounding the rectangle's edges
        .attr('width', 260) //setting width and height
        .attr('height', spacing * colorScale.domain().length + circleRadius * 2)//height is the spacing of the text times the seven options + circle radius doubled
        .attr('fill', 'white')//color
        .attr('opacity', 0.8);//opacity

    const groups = selection.selectAll('g')
      .data(colorScale.domain());
    const groupsEnter = groups
      .enter().append('g')
        .attr('class', 'tick');
    groupsEnter
      .merge(groups)
        .attr('transform', (d, i) =>
          `translate(0, ${i * spacing})`
        ).on('click', d => console.log(d));//doesn't show names, just that pointer event occurred - can't proceed with interactive video
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
d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json') //load data of world polygons using d3.json -> returns promise
    .then (data => { //then (access data and create function that uses data as input)
        console.log(data);
        const countries = topojson.feature(data, data.objects.countries); //converts topojson into geojson?
        console.log(countries); //each feature is a country
        
        colorScale
            .domain(countries.features.map(colorValue))
            .domain(colorScale.domain().sort().reverse());
            /*.range(schemeSpectral[colorScale.domain().length]);*/
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
                .on('click', d => { //tried to create image - no errors but nothing is happening
                    if (countryRows[d.id].continent = Africa){ //not working, but also not showing any errors
                        image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png';
                    }
                     //going down the continent list
                    })
                .text(d => countryRows[d.id].name + ": " + colorValue(d).substring(3) + ", with "+ countryRows[d.id].income_grp.substring(3).toLowerCase() + " in " + countryRows[d.id].continent + ".")
                
            });

   /* Create <img> element in the HTML code.
Add style to <img> element and set display properties to none.
Create a JavaScript “show()” function that can access the image and change the display property to block.
Add button in HTML code which calls “show()” function when user clicks on it.
//go to d3 to see how to style css of .text*/