function greetMe() {
  const nameInput = document.querySelector("#name");
  //   const nameInput = document.getElementById("name");
  const yearInput = document.getElementById("year");
  const resultsDiv = document.getElementById("results");

  const currentYear = new Date().getFullYear();
  const age = currentYear - yearInput.value;

  resultsDiv.innerHTML =
    // "Hello " + nameInput.value + ", you were born in " + yearInput.value;
    `Hello ${nameInput.value}, you were born in ${yearInput.value} and are approximately ${age} years old.`;

  document.querySelector("#name");

  console.log(nameInput.value);
  console.log(yearInput.value);
}
