let pre = document.createElement("link");
pre.rel = "stylesheet";
pre.type = "text/css";
pre.href = "../load.css";
pre.id = "style";
document.head.prepend(pre);
window.addEventListener("load", function () {
  document.getElementById("style").remove();
});
//scripting-js
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
function greeting() {
  const time = new Date();
  const hours = time.getHours();
  const welcome = document.getElementById("welmessage");
  if (!welcome) return;
  if (hours < 12) {
    welcome.innerHTML = "Good Morning!";
  } else if (hours < 16) {
    welcome.innerHTML = "Good Afternoon!";
  } else if (hours < 20) {
    welcome.innerHTML = "Good Evening!";
  } else {
    welcome.innerHTML = "Good Night!";
  }
}
var shiftWindow = function () {
  scrollBy(0, -50);
};
window.addEventListener("hashchange", shiftWindow);
function load() {
  if (window.location.hash) shiftWindow();
}
// or for a banner:
window.addEventListener("load", function () {
  includeHTML();
  greeting();
});
