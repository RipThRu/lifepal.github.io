var ctr = 3;
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "" || password == "" || username != "" || password != ""){
    alert("Login success!");
    window.location.href = "homePage.html";
  }else{
    ctr--;
    if(ctr == 2){
      alert("You have " + ctr + " more attempts!");
    }else if(ctr == 1){
      alert("You have " + ctr + " more attempt!");
    }
    // Disabling fields after 3 attempts.
    if(ctr == 0){
      alert("You have used up your 3 attempts, try again later.");
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("loginBtn").disabled = true;
      return false;
    }
  }
}
function redirect(){
  window.location.href = "registration.html";
}
