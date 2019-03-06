function draw_bubble_data(the_data, colors_field, xaxis_field) {
    
    let People = 0
    let max_People = 400

    var g = d3.select("#chart-area")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            .attr("id", "bar_chart_g")

    var x = d3.scaleBand()
          .range([0,width])
          .padding(0.2);

    var y = d3.scaleLinear()
          .range([height, 0]);

    var yLabel = g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -40)
        .attr("x", -200)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .text("People per job title")

    let svg = d3.select("#bar_chart_g")
    
    //agency 
    for(let datumx of the_data){
        //job_title
        for(let datumy of the_data){
            //have checker 
            //job match
            for(let datamz of the_data){
                if (datumx.agency == datumy.agency){
                    if (datumy.job_title = datamz.job_title){
                        People++;
                    }
                }
            }
            var bar = g.selectAll(".bar")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("fill", "IndianRed")
                    .attr("stroke","Purple")
                    .attr("x", function(d) 
                    {return x(People); })
                    .attr("width", x.bandwidth())
                    .attr("y", function(d) 
                    {return y(max_People); })
                    .attr("height", function(d) 
                    {return height - y(max_People); }); 
            People = 0
        }
    }
    

}