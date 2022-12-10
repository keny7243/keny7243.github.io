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
    .attr('transform', `translate(180,150)`);

g.append('path') //appending to g
    .attr('class', 'sphere') //giving the path a class named sphere
    .attr('d', pathGenerator({type: 'Sphere'})); //form of the globe

svg.call(d3.zoom().on('zoom', (e) => { //zoom when zoomed - had to put e so that transform would work
    g.attr('transform', e.transform);
    }));

 
  /* colorLegendG.call(colorLegend, {
      colorScale,
      circleRadius: 30,
      spacing: 80,
      textOffset: 40
    });*/

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

//make a json using the same d numbers, adding image files and biodiversity index
//then add to legend or text at the bottom

d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json') //load data of world polygons using d3.json -> returns promise
    .then (data => { //then (access data and create function that uses data as input)
        console.log(data);
        const countries = topojson.feature(data, data.objects.countries); //converts topojson into geojson?
        console.log(countries); //each feature is a country
        
        colorScale
            .domain(countries.features.map(colorValue))
            .domain(colorScale.domain().sort());
        console.log(colorScale.domain());

        g.selectAll('path')//selectng all paths in g
            .data(countries.features)//data join for our paths of features
            .enter().append('path')//append a new path for each new element
                .attr('class', 'country')//giving this a class of country
                .attr('d', pathGenerator)//set the d attribute of these paths based on the country
                //d is a string containing a series of path commands that define the path to be drawn ----> https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
                .attr('fill', d=> colorScale(colorValue(d)))//fill is based on income data
                .append('title') //can't just add attribute because this is child of svg
                .text(d => countryRows[d.id].name); //gets country name from tsv
    });

//go to d3 to see how to style css of .text