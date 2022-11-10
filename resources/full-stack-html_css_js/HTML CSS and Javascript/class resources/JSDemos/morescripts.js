function varVsLet(){
    let let_demo;
    if(true){
        var var_demo = "Hello from var";
        let_demo = "Hello from let";
    }
    document.getElementById("output").innerHTML = var_demo;
    document.getElementById("output").innerHTML += `<br /> ${let_demo}`;
}

function multiLine(){
    let person = { name: 'Jane', age: 21 }
    const personHtml = `
    <dl>			
        <dt>Person info</dt>
        <dd>Name: ${person.name}</dd>
        <dd>Age next birthday: ${person.age + 1}</dd>
    </dl>`
    document.getElementById("output").innerHTML = personHtml;
}

function totalSalary(base, bonus1 = 0.0, bonus2 = 0.0){
    return base + bonus1 + bonus2;
}

function displaySalary(){
    document.getElementById("output").innerHTML = `Salary ${totalSalary(1200)}`;
    document.getElementById("output").innerHTML += `<br />Salary ${totalSalary(1200,500)}`;
    document.getElementById("output").innerHTML += `<br />Salary ${totalSalary(1200,undefined,400)}`;
}

function calcRectArea(width, height=width){
    return width * height
}

const defHeight = 10;
function calcRectAreaGlobal(width, height=defHeight){
    return width * height
}
function displayRectangles(){
    const side = parseInt(prompt("Enter the size of a square's side"));
    document.getElementById("output").innerHTML = 
        `The area of a square with a ${side} side is: ${calcRectArea(side)}`;
    const width = 15;
    document.getElementById("output").innerHTML += 
        `<br>The area of a rectangle with a width of ${width} and height ${defHeight} is: 
        ${calcRectAreaGlobal(width)}`;
    const localHeight = parseInt(prompt("Enter the height of a rectangle"));
    document.getElementById("output").innerHTML += 
        `<br>The area of a rectangle with a width of ${width} and height ${localHeight} is: 
        ${calcRectAreaGlobal(width, localHeight)}`;
}

function list(heading, ...items){
    let str = `<h3>${heading}</h3>`
    for (let item of items)
      str += `${item}<br>`
    return str
  }
  

function useVariadicFunction(){
    document.getElementById("output").innerHTML = 
        list('Teams','Liverpool','Manchester City','Chelsea');
}

function spreadDemo(){
    const nums = [50, 40, 70, 35];
    console.log(...nums);
    let lowest = Math.min(...nums);
    document.getElementById("output").innerHTML = `The lowest mark is ${lowest}`;
}

let mySquare = n => n * n;
let myMultiply = (n, m) => n * m;
let getGrade = mark => {
    if(mark >= 80){
        return "Grade A";
    }
    else if(mark >= 60){
        return "Grade B";
    }
    else if(mark >= 45){
        return "Grade C";
    }
    else{
        return "Resit";
    }
}
function useSquare(){
    const num = parseInt(prompt("Enter a number"));
    document.getElementById("output").innerHTML = 
        `The square of ${num} is ${mySquare(num)}`;
    document.getElementById("output").innerHTML += 
        `<br />The square of ${num} is ${myMultiply(num, num)}`;
    const examMark = parseInt(prompt("Enter an exam mark"));
    document.getElementById("output").innerHTML += 
        `<br />${examMark} gets a ${getGrade(examMark)}`;
}
  