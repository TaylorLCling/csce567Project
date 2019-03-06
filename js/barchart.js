function draw_bar_data(the_data, colors_field, xaxis_field) {
agencies = [];
agency_names = [];

salary_min = 9999999;
salary_max = 0;

for (let datum in the_data) {
    agencies.push(datum);
    salary_max = Math.max(salary_max, datum.salary);
    salary_min = Math.min(salary_min, datum.salary);

    if (datum.agency != agency_names){
        agency_names.push(datum.agency);
    }
}

var svg = d3.select("#chart-area")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var yLabel = svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -40)
        .attr("x", -200)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .text("Average Per Agency")

var y = d3.scaleLinear().range([0, height]).domain([salary_min, salary_max]);
var x = d3.scaleBand().range([0, width]).domain(agency_names);


for (let agent in agencies) {
    bar_height = agencies[agent].salary;

    let bar = svg.selectAll(".bar")
            .append("rect")
            .attr("fill", "IndianRed")
            .attr("stroke","Purple")
            .attr("x", function(d) 
                {return x(agencies[datum]); })
            .attr("width", x.bandwidth())
            .attr("y", function(d) 
                {return y(bar_height); })
            .attr("height", function(d) 
                {return height - y(bar_height); });
}


     
    

}