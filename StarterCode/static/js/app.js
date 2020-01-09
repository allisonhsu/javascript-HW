// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
// var row = tbody.append("tr")
// var cell = row.append("td")

// tableData.forEach(function(d){
//     console.log(d);
//     var row = tbody.append("tr");
//     Object.entries(d).forEach(function([k,v]){
//         var cell = row.append("td");
//         cell.text(v);
//     })
// });

button.on("click",function(){
    
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(d => d.datetime === inputValue);

    console.log(filteredData);

    d3.selectAll("td").remove();
    
    filteredData.forEach(function(d){
        console.log(d)
        var row = tbody.append("tr");
        Object.entries(d).forEach(function([k,v]){
            var cell = row.append("td");
            cell.text(v);
        });
        
    });

});
