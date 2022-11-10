function displayOutput(data) {
	document.getElementById("output").innerHTML = data;
}
  
function demoPromise(){
	let myPromise = new Promise(function(myResolve, myReject) {
	let x = parseInt(prompt("Enter a number"));

	// The producing code (this may take some time)

	if (x == 0) {
		myResolve("OK");
	} else {
		myReject("Error");
	}
	});

	myPromise.then(
		function(value) {displayOutput(value);},
		function(error) {displayOutput(error);}
	);
}