
var margin = { left:100, right:20, top:50, bottom:100 };
var height = 500 - margin.top - margin.bottom, 
    width = 800 - margin.left - margin.right;
var formattedData;

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
    formattedData = data;
    draw_bubble_data(formattedData, "job_title", "agency");
    // draw_bubble_data(data, "agency", "job_title");

    d3.select('#loadingtext').remove();
});

document.getElementById('bubbleButton').addEventListener("click", bubbleFunction, true);
document.getElementById('officeButton').addEventListener("click", officeFunction, false);
document.getElementById('positionButton').addEventListener("click", positionFunction, false);

function bubbleFunction(){
    d3.select('#noBackend').remove();
    clearCanvas();
    //draw_bubble_data(formattedData, "job_title", "agency");
    setTimeout(draw_bubble_data, 1,formattedData, "job_title", "agency");
    d3.select('#loadingtext').remove()
};

function officeFunction(){
    d3.select('#noBackend').remove();
    clearCanvas();
    d3.select('#loadingtext').remove();
    document.getElementById('row').insertAdjacentHTML('beforeend', '<div id="noBackend"><p>No office graph yet</p></div>');
};

function positionFunction(){
    d3.select('#noBackend').remove();
    clearCanvas();
    d3.select('#loadingtext').remove();
    document.getElementById('row').insertAdjacentHTML('beforeend', '<div id="noBackend"><p>No position graph yet</p></div>');
};

function clearCanvas(){
    d3.select('#chart-area').remove();
    document.getElementById('row').insertAdjacentHTML('beforeend', '<div id="loadingtext"><p>crunching data, please sit tight...</p></div>');
    document.getElementById('row').insertAdjacentHTML('beforeend', '<div id="chart-area"></div>');
};