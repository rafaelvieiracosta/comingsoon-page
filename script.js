const button = document.querySelector("form > button");

function addStylesError(event) {
  event.preventDefault();
  const div = document.querySelector(".data");
  div.classList.toggle("active");
}

button.addEventListener("click", addStylesError);
