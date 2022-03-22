function barfun() {
  const link = document.querySelector(".links");
  if (link.style.display == "none") {

    link.style.display = "block";

  }
  else {
    link.style.display = "none";
  }

}

function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode")
}

function mysearch(){
var search = document.getElementById("search").value.toUpperCase();
if(search == ""){
  alert("fill the characters");
}
else{
  alert(" check ur connection");
}

}