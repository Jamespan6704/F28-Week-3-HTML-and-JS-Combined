console.log("Hello World");

let message = document.querySelector("#message");

const addMovie = (event) => {
  event.preventDefault();

  let inputField = document.querySelector("input");
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;

  movieTitle.addEventListener("click", crossOffMovie);

  movie.appendChild(movieTitle);
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  let list = document.querySelector("ul");
  list.appendChild(movie);
  inputField.value = "";
};
document.querySelector("form").addEventListener("submit", addMovie);

const deleteMovie = (event) => {
  console.log(event.target.parentNode.firstChild.textContent);
  message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;
  event.target.parentNode.remove();
  console.log(revealMessage());
};

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = `${event.target.textContent} watched!`;
  } else {
    message.textContent = `${event.target.textContent} added back!`;
  }
  console.log(revealMessage());
};

const revealMessage = () => {
  message.classList.remove("hide");
  setTimeout(() => {
    message.classList.add("hide");
  }, 1000);
};
