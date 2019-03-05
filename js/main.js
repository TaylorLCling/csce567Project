
var margin = { left:100, right:20, top:50, bottom:100 };
var height = 500 - margin.top - margin.bottom, 
    width = 800 - margin.left - margin.right;

d3.csv("data/data_2019.csv").then(function(data) {

    // sanitize the data
    for (let index in data) {
        if (index == "columns") { continue; }
        data[index].forename = data[index].forename.trim();
        data[index].surname = data[index].surname.trim();
        data[index].agency = data[index].agency.trim();
        data[index].job_title = data[index].job_title.trim();
        data[index].compensation_without_bonuses = parseFloat(data[index].compensation_without_bonuses.replace(/[^0-9.-]+/g,""));
        if (data[index].bonuses == "") { data[index].bonuses = "0"; }
        data[index].bonuses = parseFloat(data[index].bonuses.replace(/[^0-9.-]+/g,""));
        data[index].total_compensation= parseFloat(data[index].total_compensation.replace(/[^0-9.-]+/g,""));
    }

    draw_bubble_data(data, "job_title", "agency");
    // draw_bubble_data(data, "agency", "job_title");

});
