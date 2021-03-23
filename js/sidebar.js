function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById("visible").style.marginLeft = "20%";
  document.getElementById("visible").style.width = "80%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
  document.getElementById("header").style.backgroundColor = "#0003cc65";
  document.getElementById("content").style.backgroundColor = "#0483ad65";
  document.getElementById("footer").style.backgroundColor = "#0003cc65";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("visible").style.marginLeft = "0";
  document.getElementById("visible").style.width = "100%";
  document.getElementById("header").style.backgroundColor = "#0003cc";
  document.getElementById("content").style.backgroundColor = "#0483ad";
  document.getElementById("footer").style.backgroundColor = "#0003cc";
}