function draw_bubble_data(the_data, colors_field, xaxis_field) {
    let max_salary = 0;
    let xaxis_field_domain = [];
    for (let datum of the_data) {
        if (datum.total_compensation > max_salary) {
            max_salary = datum.total_compensation;
        }
        if (!(xaxis_field_domain.indexOf(datum[xaxis_field]) > -1)) {
            xaxis_field_domain.push(datum[xaxis_field]);
        }
    }

    console.log(`max_salary = ${max_salary}, xaxis_field_domain = ${xaxis_field_domain}`);


    // set up the bubblechart area
    var g = d3.select("#chart-area")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("id", "bubble_chart_svg")
        .append("g")
            .attr("transform", "translate(" + margin.left +
                ", " + margin.top + ")")
            .attr("id", "bubble_chart_g");

    var time = 0;

    // Scales
    var y = d3.scaleLinear()
        .range([0, height])
        .domain([0, max_salary]);

    var x = d3.scaleBand()
        .range([0, width])
        .domain(xaxis_field_domain);

    var continentColor = d3.scaleOrdinal(d3.schemePastel1);
    // var continentColor = d3.scaleOrdinal()
    //     .domain(["europe", "asia", "americas", "africa"])
    //     .range(d3.schemePastel1);

    // Labels
    var xLabel = g.append("text")
        .attr("y", height + 50)
        .attr("x", width / 2)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .text(xaxis_field);
    var yLabel = g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -40)
        .attr("x", -170)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .text("Total Compensation ($)")
    var timeLabel = g.append("text")
        .attr("y", height -10)
        .attr("x", width - 40)
        .attr("font-size", "40px")
        .attr("opacity", "0.4")
        .attr("text-anchor", "middle")
        .text("1800");

    // X Axis  TODO
    var xAxisCall = d3.axisBottom(x)
        .tickValues([400, 4000, 40000])
        .tickFormat(d3.format("$"));
    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height +")")
        .call(xAxisCall);

    // Y Axis
    var yAxisCall = d3.axisLeft(y)
        .tickFormat(function(d){ return +d; });
    g.append("g")
        .attr("class", "y axis")
        .call(yAxisCall);


    let svg = d3.select("#bubble_chart_g");


    let count = 0;
    for (let datum of the_data) {
        svg.append("circle")
            .attr("cx", x(datum[xaxis_field]) + 25)
            .attr("cy", y(datum.total_compensation))
            .attr("r", 2)
            .attr("fill", "black");
    }

}
