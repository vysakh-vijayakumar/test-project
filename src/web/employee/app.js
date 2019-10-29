
var SERVER = "http://dummy.restapiexample.com/"
var GET_EMPLOYEE_URL = "api/v1/employees"
var GET_EMPLOYEE_DETAIL = "api/v1/employee/"

function signin(){
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	
	getEmployees();
}

function onSelected(employee){
	console.log("Selected " + employee);
	getEmployeeDetails(employee);
}

function getEmployeeDetails(employeeId){
	let url = SERVER + GET_EMPLOYEE_DETAIL + employeeId;
	var req = new XMLHttpRequest(); // Begin a new request
	req.onreadystatechange = function() {
		console.log("State " + req.readyState);
		if (req.readyState == 4 && req.status == 200) {
			console.log(req.responseText);
		}
	}
	req.open("GET", url); // An HTTP GET request for the url
	req.send(null); // Send the request with no body
}

function getEmployees() {
	let url = SERVER + GET_EMPLOYEE_URL
	
	
	// Fetch the contents of that URL using the XMLHttpRequest object
	var req = new XMLHttpRequest(); // Begin a new request
	req.onreadystatechange = function() {
		console.log("State " + req.readyState);
		if (req.readyState == 4 && req.status == 200) {
			// If we get here, we got a complete valid HTTP response
			var response = req.responseText; // HTTP response as a string
			var employees = JSON.parse(response); // Parse it to a JS array
			// Convert the array of lender objects to a string of HTML
			var list = "";
			for(var i = 0; i < employees.length; i++) {
				item = "<li><a href='#' onclick='onSelected(" + "\"" + employees[i].id+ "\")'" + ">" + employees[i].employee_name + "</a></li>";
				console.log(item);
				list += item;
			}
			// Display the HTML in the element from above.
			employees = document.getElementById("employees");
			employees.innerHTML = "<ul>" + list + "</ul>";
		}
	}
	req.onerror = function()  {
		console.log("Error");
	}
	req.open("GET", url); // An HTTP GET request for the url
	req.send(null); // Send the request with no body
	console.log("Sending...");
}