function draw_bubble_data(the_data, colors_field, xaxis_field) {
    let max_salary = 0;
    let xaxis_field_domain = [];
    let caxis_field_domain = []
    for (let datum of the_data) {
        if (datum.total_compensation > max_salary) {
            max_salary = datum.total_compensation;
        }
        if (!(xaxis_field_domain.indexOf(datum[xaxis_field]) > -1)) {
            xaxis_field_domain.push(datum[xaxis_field]);
        }
        if (!(caxis_field_domain.indexOf(datum[colors_field]) > -1)) {
            caxis_field_domain.push(datum[colors_field]);
        }
    }

    max_salary = max_salary / 10000;

    let colors_field_pretty = colors_field.replace("_", " ");
    let xaxis_field_pretty = xaxis_field.replace("_", " ");

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
        .domain([max_salary, 0]);

    var x = d3.scaleBand()
        .range([0, width])
        .domain(xaxis_field_domain);

    var colorScale = d3.scaleOrdinal(d3.schemePastel1)
        .domain(caxis_field_domain);

    // var continentColor = d3.scaleOrdinal()
    //     .domain(["europe", "asia", "americas", "africa"])
    //     .range(d3.schemePastel1);

    // Labels
    var xLabel = g.append("text")
        .attr("y", height + 20)
        .attr("x", width / 2)
        .attr("font-size", "18px")
        .attr("text-anchor", "middle")
        .text("");
    var cLabel = g.append("text")
        .attr("y", height + 40)
        .attr("x", width / 2)
        .attr("font-size", "18px")
        .attr("text-anchor", "middle")
        .text("");
    var infoLabel = g.append("text")
        .attr("y", height + 60)
        .attr("x", width / 2)
        .attr("font-size", "12px")
        .attr("text-anchor", "middle")
        .text(`Mouse-over to see all "${colors_field_pretty}" highlighted in black.`);

    var cBubble = g.append("circle")
        .attr("cy", height + 30)
        .attr("cx", 50)
        .attr("r", 20)
        .attr("stroke", "white")
        .attr("fill", "white")

    var yLabel = g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -40)
        .attr("x", -200)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .text("Total Compensation ($) / 10000")

    // Y Axis
    var yAxisCall = d3.axisLeft(y)
        .tickFormat(function(d){ return +d; });
    g.append("g")
        .attr("class", "y axis")
        .call(yAxisCall);


    let svg = d3.select("#bubble_chart_g");

    let color_index = {};

    let count = 0;
    for (let datum of the_data) {

        if (color_index[datum[colors_field]] == null) {
            color_index[datum[colors_field]] = [];
        }

        d3.selection.prototype.moveToFront = function() {
          return this.each(function(){
            this.parentNode.appendChild(this);
          });
        };

        let circ = svg.append("circle")
            .attr("cx", x(datum[xaxis_field]) + 25)
            .attr("cy", y(datum.total_compensation / 10000))
            .attr("r", 2)
            .attr("fill", colorScale(datum[colors_field]))
            .on("mouseover", function(d) {
                xLabel.text(`${xaxis_field_pretty}: ${datum[xaxis_field]}`);
                cLabel.text(`${colors_field_pretty}: ${datum[colors_field]}`);
                cBubble.attr("fill", colorScale(datum[colors_field]));
                cBubble.attr("stroke", "black");
                for (let c of color_index[datum[colors_field]]) {
                    c.attr("fill", "black");
                    c.moveToFront();
                }
            }).on("mouseout", function(d) {
                xLabel.text("");
                cLabel.text("");
                cBubble.attr("fill", "white");
                cBubble.attr("stroke", "white");
                for (let c of color_index[datum[colors_field]]) {
                    c.attr("fill", colorScale(datum[colors_field]));
                    c.moveToFront();
                }
            });

            color_index[datum[colors_field]].push(circ);
    }

    d3.select("#loadingtext").remove();

}
