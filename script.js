// XML - HTTP Request(XHR)
// For Client server interactions

// Step - 1 -> Create a XHR Object
var request = new XMLHttpRequest();

// Step - 2 -> Opening a XHR connection
// HTTP method and API url should be passed
request.open("GET", "https://restcountries.com/v3.1/all");

// Step - 3 -> Start the connection
request.send();

// Step - 4 -> Receive the response received from the server once it is sent and manipulate it
request.onload = function () {
  var response = JSON.parse(request.response);
  console.log(response);
  // var newResp = response.filter(elem => elem.population > 100000);
  
  let newResp = response.filter(elem => elem.region === "Asia");
  let population = newResp.map(ele => ele.population);
  console.log(population);
  let arr = population.reduce((acc, curr) => acc+curr, 0)
  console.log(arr)
};


// 