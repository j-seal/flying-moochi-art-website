function on() {
  if(document.getElementById("overlay").style.display == "block"){
      document.getElementById("overlay").style.display = "none";
  }
    else{
        document.getElementById("overlay").style.display = "block";
    }
  $('#nav-icon4').toggleClass('open'); 
}

function off() {
  document.getElementById("overlay").style.display = "none";
    $('#nav-icon4').toggleClass('open');
    document.body.scroll = "yes";
}
