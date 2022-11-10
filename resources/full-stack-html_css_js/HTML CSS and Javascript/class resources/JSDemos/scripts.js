function variables(){
	var name = prompt("Enter your name");
    document.getElementById("output").innerText = "Hello " + name;
}

function arithmetic(){
    var radius = 10;
    var area = 3.14 * radius * radius;
    document.getElementById("output").innerText = "Area of circle is " + area;
}

function conditionalOp(){
    var examMark = parseInt(prompt("Enter the exam mark"));
    var result = examMark >= 45 ? "Pass" : "Resit";
    document.getElementById("output").innerText = examMark + " is a " + result;
}

function ifDemo(){
    var d = new Date();
    var time = d.getHours();
    if (time < 12){
        document.getElementById("output").innerHTML = "<b>Good morning!</b>";
    }
}

function switchDemo(){
    var d = new Date();
    var theMonth = d.getMonth();
    switch (theMonth){
        case 11:
        case 0:
        case 1:
            document.getElementById("output").innerText = "Winter";
            break;

        case 2:
        case 3:
        case 4:
            document.getElementById("output").innerText = "Spring";
            break;

        case 5:
        case 6:
        case 7:
            document.getElementById("output").innerText = "Summer";
            break;

        default:
            document.getElementById("output").innerText = "Autumn";
            break;
    }
}

function errorDemo(){
    try{
        var examMark = parseInt(promppt("Enter the exam mark"));
        var result = examMark >= 45 ? "Pass" : "Resit";
        document.getElementById("output").innerHTML = examMark + " is a " + result;
    }
    catch(ex){
        document.getElementById("output").innerHTML = "Exception occured " + ex;
    }
    finally{
        document.getElementById("output").innerHTML += "<br />This always runs :)";
    }   
}

function forDemo(){
    var table = parseInt(prompt("What times table?"));
    document.getElementById("output").innerHTML = "";
    for(i = 1; i <= 12; i++){
        document.getElementById("output").innerHTML += i + " * " + table +  " = " +
            (i * table) + "<br />";
    }
}

function whileDemo(){
    var table = parseInt(prompt("What times table?"));
    var i = 1;
    document.getElementById("output").innerHTML = "";
    while(i <= 12){
        document.getElementById("output").innerHTML += i + " * " + table +  " = " +
            (i * table) + "<br />";
        i++;
    }
}

function doWhileDemo(){
    do{
        var table = parseInt(prompt("What times table?"));
    }while(isNaN(table));
    var i = 1;
    document.getElementById("output").innerHTML = "";
    while(i <= 12){
        document.getElementById("output").innerHTML += i + " * " + table +  " = " +
            (i * table) + "<br />";
        i++;
    }
}

function forInDemo(){
    document.getElementById("output").innerHTML = "";
    var players = new Array();
    players[0] = "Leon Britton";
    players[1] = "Nathan Dyer";
    players[2] = "Joe Allen";
    var c;
    for (c in players){
        document.getElementById("output").innerHTML += "Great Swans player: " + players[c] + "<br/>";
    }
}