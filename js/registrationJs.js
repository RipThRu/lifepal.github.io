const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const name = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("registration");
const error = document.getElementById("error");

function redirect(){
  if (username == "" || password == "" || username != "" || password != ""){
    alert("Redirecting you to the home page.");
    window.location.href = "homePage.html";
  }
}
selected.addEventListener("click", () =>{
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(x => {
  x.addEventListener("click", () =>{
    selected.innerHTML = x.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

form.addEventListener("submit", (a) =>{
  let messages = [];
  if(name.value == "" || name.value == null){
    messages.push("Name is required!");
  }
  if(password.value.length <= 5){
    messages.push("Password must be longer than 5 characters!");
  }
  if(messages.length > 0){
    a.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
})
