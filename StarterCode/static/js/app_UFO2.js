// from data.js
var tableData = data;

// YOUR CODE HERE!
// -------------------------------------Part 1-------------------------------------
// var tbody = d3.select("tbody");
// var button = d3.select("#filter-btn");


// button.on("click",function(){
    
//     var inputDate = d3.select("#datetime");
//     var inputValue = inputDate.property("value");

//     console.log(inputValue);
//     console.log(tableData);

//     var filteredData = tableData.filter(d => d.datetime === inputValue);

//     console.log(filteredData);

//     d3.selectAll("td").remove();
    
//     filteredData.forEach(function(d){
//         console.log(d)
//         var row = tbody.append("tr");
//         Object.entries(d).forEach(function([k,v]){
//             var cell = row.append("td");
//             cell.text(v);
//         });
        
//     });

// });
// -------------------------------------Part 1 end -------------------------------------
// --------------------------------------- Bonus ---------------------------------------

// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

button.on("click",function(){

    var inputValue = d3.select("#datetime").property("value");

    var filteredDate = tableData.filter(d => d.datetime === inputValue);
    var filteredCity = tableData.filter(d => d.city === inputValue);
    var filteredState = tableData.filter(d => d.state === inputValue);
    var filteredCountry = tableData.filter(d => d.country === inputValue);
    var filteredShape = tableData.filter(d => d.shape === inputValue);

    d3.selectAll("td").remove();
    
    filteredDate.forEach(function(d){
        console.log(d)
        var row = tbody.append("tr");
        Object.entries(d).forEach(function([k,v]){
            var cell = row.append("td");
            cell.text(v);
        });
        
    });

    filteredCity.forEach(function(d){
        console.log(d)
        var row = tbody.append("tr");
        Object.entries(d).forEach(function([k,v]){
            var cell = row.append("td");
            cell.text(v);
        });
        
    });

    filteredState.forEach(function(d){
      console.log(d)
      var row = tbody.append("tr");
      Object.entries(d).forEach(function([k,v]){
          var cell = row.append("td");
          cell.text(v);
      });
      
    });

    filteredCountry.forEach(function(d){
      console.log(d)
      var row = tbody.append("tr");
      Object.entries(d).forEach(function([k,v]){
          var cell = row.append("td");
          cell.text(v);
      });
      
    });

    filteredShape.forEach(function(d){
      console.log(d)
      var row = tbody.append("tr");
      Object.entries(d).forEach(function([k,v]){
          var cell = row.append("td");
          cell.text(v);
      });
      
  });


});
// ------------------------------------- Bonus end -------------------------------------
