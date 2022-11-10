function instructionsHideOrShow() {
  const button = document.getElementById("instructionsDropdown");

  //if button is clicked show list if clicked again hide list
  button.addEventListener("click", () => {
    const list = document.querySelector("ul");
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  });
}
